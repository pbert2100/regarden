import { LoginContext } from '../contexts/handleLogin.js';
import { useState, useContext } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const {isLoggedIn, substringAccount, currentAccount, Connect} = useContext(LoginContext);
    const [isOpen, setIsOpen] = useState(false);

    async function handleMenu() {
        if(isOpen == false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <nav id='container' className='fixed w-full z-50'>
            <div id='nav' className='py-5 border-black border-b-2 bg-white'>
                <section className='flex items-center justify-between'>
                    <Link href='/'>
                        <div className='flex items-center cursor-pointer justify-center'>
                            <img alt='Logo' src='/logo.svg' className='w-40' />
                        </div>
                    </Link>

                    <div className='hidden md:grid grid-cols-2 items-center text-center gap-3'>
                        <Link href='/mint'>
                            <div className='bg-black w-40 text-center cursor-pointer'>
                                <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                    <h1>Get Started</h1>
                                </div>
                            </div>
                        </Link>

                        {isLoggedIn ?
                            <Link href={"/address/" + currentAccount}>
                                <div className='bg-black w-40 text-center cursor-pointer'>
                                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                        <h1>{substringAccount}</h1>
                                    </div>
                                </div>
                            </Link>
                            :
                            <button onClick={Connect}>
                                <div className='bg-black w-40 text-center cursor-pointer'>
                                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                                        <h1>Connect Wallet</h1>
                                    </div>
                                </div>
                            </button>
                        }
                    </div>

                    <div className='grid md:hidden'>
                        {isOpen ?
                            <button onClick={handleMenu}><img src='/close.svg' alt='Close Menu' className='w-10' /></button>
                            :
                            <button onClick={handleMenu}><img src='/menu.svg' alt='Open Menu' className='w-10' /></button>
                        }
                    </div>
                </section>
            </div>

            {isOpen ?
                <div className='w-full p-5 md:hidden border-b-2 border-black bg-white'>
                    <div className='flex flex-col items-center'>
                        <Link href='/mint'>
                            <div className='bg-black w-full text-center cursor-pointer mb-2'>
                                <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                                    <h1>Get Started</h1>
                                </div>
                            </div>
                        </Link>

                        {isLoggedIn ?
                            <Link href={"/address/" + currentAccount}>
                                <div className='bg-black w-full text-center cursor-pointer'>
                                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                                        <h1>{substringAccount}</h1>
                                    </div>
                                </div>
                            </Link>
                            :
                            <button onClick={Connect} className='w-full'>
                                <div className='bg-black w-full text-center cursor-pointer'>
                                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                                        <h1>Connect Wallet</h1>
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </div>
                :
                <></>
            }
        </nav>
    )
}