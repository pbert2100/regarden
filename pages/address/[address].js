import Warning from '../../components/linkWarning.js';
import { createClient } from '@supabase/supabase-js';
import Banner from '../../components/banner.js';
import Panel from '../../components/panel.js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import Head from 'next/head';

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

export default function Address({CONNECTION, S_URL, KEY, ADDRESS}) {
    const [isLoading, setIsLoading] = useState(false);
    const [account, setAccount] = useState([])
    const [slots, setSlots] = useState([])
    const [range, setRange] = useState(11)
    const [total, setTotal] = useState(0)
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return
        let account = router.query.address;
        setAccount(account);
        loadAccount(account);
    }, [router.isReady]);

    async function loadAccount(account) {
        try {
            const contractABI = require('/contracts/abi.json'); // CONTRACT ABI

            const provider = new ethers.providers.JsonRpcProvider(CONNECTION); // PROVIDER CONNECTION
            let contract = new ethers.Contract(ADDRESS, contractABI, provider); // CREATING CONTRACT
            const slt = await contract.fetchSlotsByAddress(account); // FETCH SLOTS BY ADDRESS

            let row = await createClient(S_URL, KEY).from('Adressess').select('*').eq('address', account) // FETCH SLOT DATA BY ADDRESS FROM SUPABASE

            let rowCount = 0; // ROW COUNTER (NECESSARY TO MATCH THE SUPABASE DATA WITH THE BLOCKCHAIN DATA)

            const s = await Promise.all(slt.map(async i => { // MAKING SLOT WITH THE BLOCKCHAIN AND SUPABASE DATA
                let it = {id: String(i.id), address: i.sAddress, name: row.data[rowCount].name, rarity: String(i.rarity), verified: row.data[rowCount].verified,}
                console.log("it: " + it)
                rowCount ++; // INCREMENT THE ROW COUNTER
                return it
            }))

            setTotal(s.length);
            setSlots(s.slice(0, range));
            setRange(range + 10);

            console.log("slt: " + slt)
            console.log("row: " + row)
            console.log("s: " + s)
        } catch(e) {
        }
    }

    async function loadMore() {
        setIsLoading(true);

        loadAccount(router.query.address).then(() => {
            setIsLoading(false);
        });
    }

  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Regarden - {account}</title>
            <meta name="author" content="Regarden" />
            <meta name="description" content="Take a look at the slots of this address." />
        </Head>

        <Warning />

        <div className='border-b-2 border-black'>
            <section className='pt-32 pb-10'>
                <div>
                    <p className='mb-1'>Address</p>
                    <h1 className='text-2xl break-all'>{account}</h1>
                </div>

                <Panel />
            </section>
        </div>

        <div className='min-h-screen bg-color-4'>
            <section className='py-10'>
                <div className='mb-5 flex items-end'>
                    <h1 className='text-2xl'>Slots</h1>
                    <p className='ml-2'>[{total}]</p>
                </div>
                
                <div>
                    {slots.length > 0 && slots.map((slot, key) => (
                        <div key={key} className='mb-3'>
                            <Banner identifier={slot.id} rarity={slot.rarity} name={slot.name}/>
                        </div>
                    ))}

                    {slots.length == 0 && <div className='rounded bg-black'><p className='p-5 rounded bg-white border-black border-2 -translate-x-1 -translate-y-1'>This address has no slots yet!</p></div>}

                    {total + 11 > range ?
                        <>
                            {isLoading ?
                                <div className='w-full grid place-items-center mb-20 mt-10'>
                                    <div className='py-2 w-full sm:max-w-xs'>
                                        <div className="loading loading--full-height" />
                                    </div>
                                </div>
                                :
                                <div className='w-full grid place-items-center mb-20 mt-10'><button id='loadMore' onClick={loadMore} className='py-2 w-full sm:max-w-xs text-black bg-white'><h1 className='digital'>Load More _</h1></button></div>
                            }
                        </>
                        :
                        <></>
                    }
                </div>
            </section>
        </div>
    </>
  )
}