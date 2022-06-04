// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract VI {
    address payable owner;
    uint public mintPrice;

    constructor() {
        owner = payable(msg.sender);
        mintPrice = 3000000000000000;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    struct Slot {
        uint id;
        address payable sAddress;
        uint rarity;
    }

    uint public numSlots = 0;
    mapping (uint => Slot) slots;

    event Minted(uint256 indexed _slotID, address indexed _address, uint256 _rarity);
    event Transfered(address indexed _from, address indexed _to, uint256 indexed _slotID);

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function Mint(uint _seed) public payable returns (uint slotID) {
        require(msg.value == mintPrice);

        slotID = numSlots++;
        Slot storage s = slots[slotID];

        s.id = slotID;
        s.sAddress = payable(msg.sender);

        uint random_number = uint(keccak256(abi.encodePacked(_seed, block.timestamp, block.difficulty, msg.sender, numSlots, block.number + 1))) % 100;

        if(slotID < 25) {
            s.rarity = 0;
        } else {
            if(random_number == 0) s.rarity = 1;
            if(random_number > 0 && random_number <= 3) s.rarity = 2;
            if(random_number > 3 && random_number <= 8) s.rarity = 3;
            if(random_number > 8 && random_number <= 23) s.rarity = 4;
            if(random_number > 23 && random_number <= 58) s.rarity = 5;
            if(random_number > 58) s.rarity = 6;
        }        

        payable(owner).transfer(msg.value);

        emit Minted(s.id, s.sAddress, s.rarity);
    }

    function fetchSlots(uint _range) public view returns (Slot[] memory) {
        uint range = _range;

        if(_range > numSlots) {
            range = numSlots;
        }

        Slot[] memory _slots = new Slot[](range);

        uint newCount = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.id < range) {
                _slots[newCount] = currentSlot;
                newCount++;
            }
        }

        return _slots;
    }

    function fetchSlotByID(uint _id) public view returns (Slot[] memory) {
        Slot[] memory _slot = new Slot[](1);

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.id == _id) {
                _slot[0] = currentSlot;
            }
        }

        return _slot;
    }

    function fetchSlotsByAddress(address _address) public view returns (Slot[] memory) {
        uint count = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.sAddress == _address) {
                count++;
            }
        }

        Slot[] memory _slots = new Slot[](count);

        uint newCount = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.sAddress == _address) {
                _slots[newCount] = currentSlot;
                newCount++;
            }
        }

        return _slots;
    }

    function balanceOf(address _owner) external view returns (uint256) {
        uint count = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.sAddress == _owner) {
                count++;
            }
        }

        return count;
    }
    
    function ownerOf(uint256 _tokenId) external view returns (address) {
        return slots[_tokenId].sAddress;
    }
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;

    function transferFrom(uint _id , address _from, address _to) external payable {
        Slot storage s = slots[_id];

        require(msg.sender == s.sAddress && _from != address(0) && _to != address(0));
        
        s.sAddress = payable(_to);

        payable(_from).transfer(msg.value);

        emit Transfer(_from, _to, s.id);
    }

    function approve(address to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(msg.sender == owner || isApprovedForAll(owner, msg.sender),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }
    
    function setApprovalForAll(address _operator, bool _approved) external;
    
    function getApproved(uint256 _tokenId) external view returns (address);
    
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);

    function transferOwnership(address _newOwner) public isOwner {
        require(_newOwner != address(0));
        owner = payable(_newOwner);
    }

    function changeMintPrice(uint _newPrice) public isOwner {
        mintPrice = _newPrice;
    }
}