import { LoginContext } from '../contexts/handleLogin.js';
import { createClient } from '@supabase/supabase-js';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { ethers } from 'ethers';
import Head from 'next/head';
import Link from 'next/link';
import Web3 from 'web3';

export async function getServerSideProps(props) {
    return {
        props: {
            CONNECTION: process.env.CONNECTION,
            S_URL: process.env.SUPABASE_URL,
            KEY: process.env.SUPABASE_ANON_KEY,
            ADDRESS: process.env.CONTRACT_ADDRESS
        }
    }
}

export default function Mint({CONNECTION, S_URL, KEY, ADDRESS}) {
    const {isLoggedIn, substringAccount, Connect} = useContext(LoginContext);
    const [formInput, updateFormInput] = useState({name: '', imageURL: ''});
    const [errorMessages, setErrorMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const router = useRouter();

    async function MintSlot(e) {
        e.preventDefault();

        const {name, imageURL} = formInput;
        let messages = [];

        if(name.trim() === "" || name == null) {
            messages.push("Name is required")
        }
      
        if(name.length > 23) {
            messages.push("Name must be less than 23 characters")
        }
      
        if(imageURL.trim() === "" || imageURL == null) {
        messages.push("Image URL is required")
        }
      
        if(imageURL.length > 300) {
            messages.push("Image URL must be less than 300 characters")
        }
      
        try {
            new URL(imageURL);
        } catch (e) {
            messages.push("Image URL must be a valid URL") 
        }

        if(messages.length > 0) {
            setErrorMessages(messages)
            document.getElementById("errorModal").classList.remove("hidden"); 
        } else {
            setIsLoading(true);
        
            const contractABI = require('/contracts/abi.json'); // CONTRACT ABI
        
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // REQUEST CONNECTED ACCOUNT FROM METAMASK
            const account = ethers.utils.getAddress(accounts[0]); // SET CONNECTED ACCOUNT
        
            const web3 = new Web3(new Web3.providers.HttpProvider(CONNECTION)); // PROVIDER CONNECTION
            const contract = new web3.eth.Contract(contractABI, ADDRESS); // CREATING CONTRACT
        
            const numSlots = await contract.methods.numSlots().call(); // FETCHING THE NUMBER OF SLOTS
        
            const seed = Math.floor(Math.random() * 1000) + 1; // GENERATING THE SEED
        
            const transaction = await contract.methods.Mint(seed).send({ // MAKING TRANSACTION AND CREATING SLOT
                from: account,
                to: ADDRESS,
                gasLimit: 3000001,
                value: 3000000000000000,
            });
        
            // SAVING SLOT DATA IN SUPABASE
            const { data, error } = await createClient(S_URL, KEY).from('Adressess').insert([{imageURL: imageURL, name: name, verified: false, slot: numSlots, address: account, seed: seed},])
            
           router.push('/address/' + ethers.utils.getAddress(account))
        }
    }

    async function closeWarning() {
        document.getElementById("errorModal").classList.add("hidden");
        document.getElementById("noWalletWarning").classList.add("hidden");
    }

  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Regarden - Mint</title>
            <meta name="author" content="Regarden" />
            <meta name="description" content="Mint your personal slot in a NFT format!" />
        </Head>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div id='errorModal' className='bg-black bg-opacity-75 min-h-screen w-full flex justify-center items-center fixed hidden z-10'>
                <section className='flex justify-center'>
                    <div className='max-w-md w-full bg-white rounded border-black border-2 p-5'>
                        {errorMessages.map((errorMessages, key) => (
                            <p key={key} className='mb-5'>&#128204; {errorMessages} !</p>
                        ))}
                        <button onClick={closeWarning} className='w-full'>
                            <div className='bg-black cursor-pointer'>
                                <div className='border-black border-2 bg-color-1 p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                    <h1>X</h1>
                                </div>
                            </div>
                        </button>
                    </div>
                </section>
            </div>

            <div id='noWalletWarning' className='bg-black bg-opacity-75 min-h-screen w-full flex justify-center items-center fixed hidden z-10'>
                <section className='flex justify-center'>
                    <div className='bg-white rounded border-black border-2 max-w-md w-full p-5 text-center'>
                        <p className='mb-5 text-lg'>You need to install <Link href="https://metamask.io/download/"><span className='underline cursor-pointer'>MetaMask</span></Link> first!</p>
                        <button onClick={closeWarning} className='w-full'>
                            <div className='bg-black cursor-pointer'>
                                <div className='border-black border-2 bg-color-1 p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                    <h1>X</h1>
                                </div>
                            </div>
                        </button>
                    </div>
                </section>
            </div>

            <div className='min-h-screen grid place-items-center bg-color-2'>
                <section className='grid place-items-center'>
                    {isLoggedIn ?
                        <div className='rounded-xl bg-black'>
                            <div className='p-5 border-black border-2 rounded-xl bg-white -translate-x-1 -translate-y-1'>
                                <p className='mb-1'>Hi, {substringAccount}</p>
                                <h1 className='text-3xl mb-5'>Get started!</h1>
                                <form onSubmit={MintSlot} className='flex flex-col gap-3'>
                                    <input placeholder='Name' className='border-black border-2 p-2 transition ease-in-out duration-200 outline-none hover:brightness-95 focus:brightness-95' onChange={e => updateFormInput({ ...formInput, name: e.target.value })}/>
                                    <input placeholder='Image URL' className='border-black border-2 p-2 transition ease-in-out duration-200 outline-none hover:brightness-95 focus:brightness-95' onChange={e => updateFormInput({ ...formInput, imageURL: e.target.value })}/>
                                    <p className='text-sm'>Mint price: 0,003 ETH</p>
                                    
                                    {isLoading ?
                                        <div className="loading loading--full-height" />
                                        :    
                                        <button type='submit'>
                                            <div className='bg-black cursor-pointer'>
                                                <div className='border-black border-2 bg-color-5 p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                                    <h1>Mint</h1>
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </form>
                                <p className='mt-3 text-sm'>By minting a slot you agree with the <Link href="/about"><span className='underline cursor-pointer'>Terms of Use</span></Link>!</p>
                            </div>
                        </div>
                        :
                        <div className='grid place-items-center'>
                            <p>Easy and quick the way you like it</p>
                            <h1 className='text-3xl md:text-4xl mb-5 text-center mt-1'>You need to connect your wallet!</h1>
                            <button onClick={Connect}>
                                <div className='bg-black w-40 text-center cursor-pointer'>
                                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                        <h1>Connect Wallet</h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                    }
                </section>
            </div>
        </motion.div>
    </>
  )
}
