import { useState, createContext } from 'react';
import { ethers } from 'ethers';

export const LoginContext = createContext({}); // EXPORTING CREATE CONTEXT

export const LoginProvider = ({ children }) => { // EXPORTING THE PROVIDER
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [substringAccount, setSubstringAccount] = useState();
    const [currentAccount, setAccount] = useState();

    async function Connect() {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAccount = ethers.utils.getAddress(accounts[0]);

            if (typeof connectedAccount !== 'undefined') {
                setSubstringAccount(connectedAccount.substring(0, 5) + "..." + connectedAccount.substring(connectedAccount.length - 3, connectedAccount.length));
                setAccount(connectedAccount);
                setLoggedIn(true);
            }
        } else {
            document.getElementById("noWalletWarning").classList.remove("hidden");
        };
    };

    return (<LoginContext.Provider value={{isLoggedIn, substringAccount, currentAccount, Connect}}>{children}</LoginContext.Provider>);
};

