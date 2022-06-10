// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract VI {
    address payable owner;
    uint public mintPrice;
    string private _symbol;
    string private _name;
    uint public numSlots = 0;

    constructor() {
        owner = payable(msg.sender);
        mintPrice = 3000000000000000;
        _symbol = 'SLT';
        _name = 'SLOT';
    }

    modifier isOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    struct Slot {
        uint tokenId;
        address payable owner;
        uint rarity;
    }

    mapping (uint => Slot) slots;
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    mapping(uint256 => address) private _tokenApprovals;

    event Minted(uint256 indexed tokenId, uint256 indexed seed, uint256 indexed rarity);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function Mint(uint seed) public payable returns (uint slotID) {
        require(msg.value == mintPrice);

        slotID = numSlots++;
        Slot storage s = slots[slotID];

        s.tokenId = slotID;
        s.owner = payable(msg.sender);

        uint random_number = uint(keccak256(abi.encodePacked(seed, block.timestamp, block.difficulty, msg.sender, numSlots, block.number + 1, slotID))) % 100;

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

        emit Minted(s.tokenId, seed, s.rarity);
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
            if (currentSlot.tokenId < range) {
                _slots[newCount] = currentSlot;
                newCount++;
            }
        }

        return _slots;
    }

    function fetchSlotByID(uint tokenId) public view returns (Slot[] memory) {
        Slot[] memory _slot = new Slot[](1);

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.tokenId == tokenId) {
                _slot[0] = currentSlot;
            }
        }

        return _slot;
    }

    function fetchSlotsByAddress(address _address) public view returns (Slot[] memory) {
        uint count = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.owner == _address) {
                count++;
            }
        }

        Slot[] memory _slots = new Slot[](count);

        uint newCount = 0;

        for (uint i = 0; i < numSlots; i++) {
            Slot storage currentSlot = slots[i];
            if (currentSlot.owner == _address) {
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
            if (currentSlot.owner == _owner) {
                count++;
            }
        }

        return count;
    }

    function ownerOf(uint256 tokenId) external view returns (address) {
        return slots[tokenId].owner;
    }

    function _transfer(address from, address to, uint tokenId) internal {
        Slot storage s = slots[tokenId];

        require(msg.sender == s.owner && from != address(0) && to != address(0));
        
        s.owner = payable(to);

        payable(from).transfer(msg.value);

        approve(msg.sender, tokenId);

        emit Transfer(from, to, tokenId);
    }

    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal {
        _transfer(from, to, tokenId);
    }

    function transferFrom(uint tokenId, address from, address to) external payable {        
        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) external payable {
        _safeTransfer(from, to, tokenId, data);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) external payable {
        _safeTransfer(from, to, tokenId, "");
    }

    function isApprovedForAll(address _owner, address _operator) external view returns (bool) {
        return _operatorApprovals[_owner][_operator];
    }

    function approve(address to, uint256 tokenId) public {
        Slot storage s = slots[tokenId];

        require(msg.sender == s.owner && to != address(0) && to != s.owner);

        _tokenApprovals[tokenId] = to;
        emit Approval(s.owner, to, tokenId);
    }

    function getApproved(uint256 tokenId) external view returns (address) {
        return _tokenApprovals[tokenId];
    }

    function _setApprovalForAll(address _owner, address operator, bool approved) internal {
        require(_owner != operator, "ERC721: approve to caller");
        _operatorApprovals[_owner][operator] = approved;
        emit ApprovalForAll(_owner, operator, approved);
    }

    function setApprovalForAll(address operator, bool approved) external {
        _setApprovalForAll(msg.sender, operator, approved);
    }

    function transferOwnership(address _newOwner) public isOwner {
        require(_newOwner != address(0));
        owner = payable(_newOwner);
    }

    function changeMintPrice(uint _newPrice) public isOwner {
        mintPrice = _newPrice;
    }
}