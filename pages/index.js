import { motion } from "framer-motion";
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Regarden</title>
        <meta name="author" content="Regarden" />
        <meta name="description" content="Mint and customize your personal identity in a NFT based format!" />
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='border-black border-b-2 min-h-screen grid place-items-center'>
          <section className='grid md:grid-cols-2 gap-10'>
            <div className='grid place-items-center'>
              <div>
                <h1 className='text-3xl md:text-4xl mb-5'>One NFT to rule them all</h1>
                <p className='text-lg md:text-xl'>Mint and customize your virtual identity in a NFT basead format for third part uses like metaverse! Get started now and join the community!</p>
                <Link href='/mint'>
                  <div className='bg-black w-40 text-center mt-5 cursor-pointer'>
                    <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                      <h1>Get Started</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className='pt-20 md:pt-0'>
              <img className='max-w-xl' src='/atv.svg' alt='Instruction Image'></img>
            </div>
          </section>
        </div>

        <div className='border-black border-b-2'>
          <section className='grid md:grid-cols-2 py-10 md:py-20 gap-10'>
            <div>
              <h1 className='text-3xl md:text-4xl mb-5'>X-Ray</h1>
              <p className='text-lg md:text-xl mb-5'>Each virtual identity has a corresponding slot in the smart contract indexed by a unique number! The rarity of the slot is also stored in the smart contract, making it immutable.</p>
              <p className='text-lg md:text-xl mb-5'>You can edit some data of your virtual identity, such as name and image Off Chain data is editable</p>
            
              <div className='flex'>
                <Link href='/about'>
                  <p className='md:text-lg cursor-pointer underline'>Read more</p>
                </Link>
              </div>
            </div>

            <div className='grid place-items-center'>
              <img className='max-w-xl' src='/code_back_test.svg' alt='Instruction Image'></img>
            </div>
          </section>
        </div>

        <div className='border-black border-b-2'>
          <section className='grid md:grid-cols-2 py-10 md:py-20 gap-10'>
            <div>
              <h1 className='text-3xl md:text-4xl mb-5'>Share your exclusivity</h1>
              <p className='text-lg md:text-xl mb-5'>Random rarity tier Code free experience Off-chain dataMint and customize your virtual identity in a NFT basead format for third part uses like metaverse! Get started now and join the community!</p>
              
              <div className='flex'>
                <Link href='/0'>
                  <p className='md:text-lg cursor-pointer underline'>Take a look</p>
                </Link>
              </div>
            </div>

            <div className='grid place-items-center'>
              <img className='max-w-xs md:max-w-sm' src='/rarity.svg' alt='Rarity Image'></img>
            </div>
          </section>
        </div>

        <div className='py-5 w-full bg-black text-white text-center'>
          <h1 className='text-lg md:text-xl'>The simplicity looks different...</h1>
        </div>

        <div className='border-black border-b-2 min-h-screen grid place-items-center text-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl md:text-4xl mb-5'>Be connected to the community!</h1>
            <p className='text-lg md:max-w-xl'>Lorem cillum anim excepteur tempor voluptate duis id deserunt in pariatur cillum eiusmod fugiat. Duis voluptate fugiat tempor id ut.</p>
          
            <Link href='/mint'>
              <div className='bg-black w-40 text-center mt-5 cursor-pointer'>
                <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:brightness-90'>
                  <h1>Get Started</h1>
                </div>
              </div>
            </Link>

            <img alt='Ethereum' className='max-w-xs mt-10' src='/power.svg'></img>
          </div>
        </div>

        <div className='bg-color-1'>
          <section className='py-10 grid place-items-center'>
            <h1 className='text-2xl md:text-3xl'>Looking for someone?</h1>
            <p>With regarden you can find anyone with their number ID!</p>

            <div className='flex flex-items-center mt-5'>
              <input placeholder='#ID' className='border-black border-2 p-2' />
              <button className='py-2 px-10 bg-black text-white transition ease-in-out duration-200 hover:bg-neutral-900'><h1>Search</h1></button>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  )
}
