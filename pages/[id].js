import { createClient } from '@supabase/supabase-js';
import Warning from '../components/linkWarning.js';
import { useState, useEffect } from 'react';
import Panel from '../components/panel.js';
import Card from '../components/card.js';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { ethers } from 'ethers';
import Link from 'next/link';
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

export default function Slot({CONNECTION, S_URL, KEY, ADDRESS}) {
    const [slot, setSlot] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return
        let id = router.query.id;
        loadSlot(id);
    }, [router.isReady]);

    async function loadSlot(id) {
        const contractABI = require('/contracts/abi.json'); // CONTRACT ABI

        const provider = new ethers.providers.JsonRpcProvider(CONNECTION); // PROVIDER CONNECTION
        let contract = new ethers.Contract(ADDRESS, contractABI, provider); // CREATING CONTRACT
        const slt = await contract.fetchSlotByID(id); // FETCH SLOT BY ID

        let row = await createClient(S_URL, KEY).from('Adressess').select('*').eq('slot', id) // FETCH SLOT DATA BY ID FROM SUPABASE

        const s = await Promise.all(slt.map(async i => { // MAKING SLOT WITH THE BLOCKCHAIN AND SUPABASE DATA
            let it = {id: String(i.id), address: i.sAddress, name: row.data[0].name, imageURL: row.data[0].imageURL, rarity: String(i.rarity), verified: row.data[0].verified, seed: row.data[0].seed}
      
            return it
        }))

        setSlot(s[0]);
    }

  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Regarden - {slot.name}</title>
            <meta name="author" content="Regarden" />
            <meta name="description" content="Enjoy and share this virtual identity." />
        </Head>

        <Warning />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section className='min-h-screen pt-28 flex flex-col items-center mb-14'>
                <Card identifier={slot.id} rarity={slot.rarity} src={slot.imageURL} name={slot.name} />

                <Panel link={slot.address} />

                <div className='mt-10 border-black border-2 rounded p-5'>
                    <p className='mb-1 text-sm'>Owned by</p>
                    <Link href={"/address/" + slot.address}><h1 className='cursor-pointer text-2xl break-all mb-5'>{slot.address}</h1></Link>
                    <p className='mb-1 text-sm'>Seed</p>
                    <h1 className='text-2xl'>{slot.seed}</h1>
                </div>
            </section>
        </motion.div>
    </>
  )
}