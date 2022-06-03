import { motion } from "framer-motion";
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Regarden - 404</title>
        <meta name="author" content="Regarden" />
        <meta name="description" content="I'm afraid we couldn't find the page you're looking for!" />
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='border-black border-b-2 min-h-screen grid place-items-center text-center'>
            <section className='flex flex-col items-center'>
                <h1 className='text-3xl md:text-4xl mb-5'>Oops!</h1>
                <p className='text-lg md:max-w-xl'>I&apos;m afraid we couldn&apos;t find the page you&apos;re looking for! Maybe you want to try something different?</p>
            
                <Link href='/mint'>
                    <div className='bg-black w-40 text-center mt-5 cursor-pointer'>
                        <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                        <h1>Get Started</h1>
                        </div>
                    </div>
                </Link>

                <img alt='Ethereum' className='max-w-xs mt-10' src='/404.svg'></img>
            </section>
        </div>
      </motion.div>
    </>
  )
}