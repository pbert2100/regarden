import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='border-black border-b-2 bg-color-1'>
        <div className='min-h-screen grid md:grid-cols-2'>
          <div className='grid place-items-center border-black border-b-2 md:border-r-2'>
            <section className='max-w-xl'>
              <h1 className='text-4xl mb-5'>One NFT to rule them all</h1>
              <p>Non laborum consectetur laborum sint aliqua magna ullamco quis. Excepteur cillum consectetur in voluptate officia enim eu sunt esse proident eu nostrud reprehenderit.</p>
            
              <Link href='/mint'>
                <div className='bg-black w-40 text-center mt-5 cursor-pointer'>
                  <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                    <h1>Get Started</h1>
                  </div>
                </div>
              </Link>
            </section>
          </div>

          <div className='border-black border-l bg-color-3 grid place-items-center'>
            <section>
              <img className='max-w-xl' src='/atv.svg' alt=''></img>
            </section>
          </div>
        </div>
      </div>

      <div className='border-black border-b-2 bg-color-2'>
        <section className='py-10 grid place-items-center'>
          <h1 className='text-3xl'>Looking for someone?</h1>
          <p>With regarden you can find anyone with their number ID!</p>

          <div className='flex flex-items-center mt-5'>
            <input placeholder='#ID' className='border-black border-2 p-2' />
            <button className='py-2 px-10 bg-black text-white'><h1>Search</h1></button>
          </div>
        </section>
      </div>

      <div className='border-black border-b-2 bg-color-4'>
        <section className='py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
          <div className='bg-black w-full h-full rounded-xl'>
            <div className='p-5 bg-white rounded-xl border-black border-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 w-full h-full'>
              <div>
                <img className='border-black border-2 object-cover object-center w-full h-full rounded' src="https://previews.123rf.com/images/brunoilfo/brunoilfo1303/brunoilfo130300002/18641538-%EA%B8%B0%ED%95%98%ED%95%99%EC%A0%81-%EB%B9%88%ED%8B%B0%EC%A7%80-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%B2%BD%EC%A7%80-%EC%9B%90%ED%99%9C%ED%95%9C-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B7%B8%EB%A6%BC.jpg" />
              </div>

              <div>
                <h1 className='text-2xl my-2'>Exclusive, unique</h1>
                <p>Cillum exercitation aute aute dolore sunt adipisicing. Aute enim veniam sint do ullamco pariatur occaecat cupidatat cupidatat excepteur. Sint ipsum aute non ad aute. Reprehenderit ad nulla velit nostrud.</p>
              </div>
            </div>
          </div>

          <div className='bg-black w-full h-full rounded-xl'>
            <div className='p-5 bg-white rounded-xl border-black border-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 w-full h-full'>
              <div>
                <img className='border-black border-2 object-cover object-center w-full h-full rounded' src="https://previews.123rf.com/images/brunoilfo/brunoilfo1303/brunoilfo130300002/18641538-%EA%B8%B0%ED%95%98%ED%95%99%EC%A0%81-%EB%B9%88%ED%8B%B0%EC%A7%80-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%B2%BD%EC%A7%80-%EC%9B%90%ED%99%9C%ED%95%9C-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B7%B8%EB%A6%BC.jpg" />
              </div>

              <div>
                <h1 className='text-2xl my-2'>Join the community</h1>
                <p>Cillum exercitation aute aute dolore sunt adipisicing. Aute enim veniam sint do ullamco pariatur occaecat cupidatat cupidatat excepteur. Sint ipsum aute non ad aute. Reprehenderit ad nulla velit nostrud.</p>
              </div>
            </div>
          </div>

          <div className='bg-black w-full h-full rounded-xl'>
            <div className='p-5 bg-white rounded-xl border-black border-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 w-full h-full'>
              <div>
                <img className='border-black border-2 object-cover object-center w-full h-full rounded' src="https://previews.123rf.com/images/brunoilfo/brunoilfo1303/brunoilfo130300002/18641538-%EA%B8%B0%ED%95%98%ED%95%99%EC%A0%81-%EB%B9%88%ED%8B%B0%EC%A7%80-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%B2%BD%EC%A7%80-%EC%9B%90%ED%99%9C%ED%95%9C-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B7%B8%EB%A6%BC.jpg" />
              </div>

              <div>
                <h1 className='text-2xl my-2'>Rarity</h1>
                <p>Cillum exercitation aute aute dolore sunt adipisicing. Aute enim veniam sint do ullamco pariatur occaecat cupidatat cupidatat excepteur. Sint ipsum aute non ad aute. Reprehenderit ad nulla velit nostrud.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='py-5 w-full bg-black text-white text-center'>
        <h1 className='text-xl'>The simplicity tastes different...</h1>
      </div>

      <div className='min-h-screen grid place-items-center text-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl mb-5'>Nostrud laboris ad Lorem minim.</h1>
          <p className='max-w-2xl'>Lorem cillum anim excepteur tempor voluptate duis id deserunt in pariatur cillum eiusmod fugiat. Duis voluptate fugiat tempor id ut.</p>
        
          <Link href='/mint'>
            <div className='bg-black w-40 text-center mt-10 cursor-pointer'>
              <div className='border-black border-2 bg-white p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                <h1>Get Started</h1>
              </div>
            </div>
          </Link>

          <img className='max-w-sm mt-10' src='/atv2.svg' alt=''></img>
        </div>
      </div>
    </>
  )
}
