import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-white border-black border-t-2'>
            <section className='py-10 flex flex-col-reverse sm:flex-row gap-10 items-center justify-between'>
                <Link href='/'>
                    <div className='items-center cursor-pointer justify-center'>
                        <img alt='Logo' src='/try2.svg' className='w-32' />
                    </div>
                </Link>

                <div className='grid sm:grid-cols-2 gap-10 items-end text-center'>
                    <Link href='/mint'><h1 className='cursor-pointer hover:underline'>Get Started</h1></Link>
                    <Link href='/about'><h1 className='cursor-pointer hover:underline'>About</h1></Link>
                </div>
            </section>

            <div className='bg-black text-white text-center text-sm'>
                <p className='py-1'>By minting a slot you agree with the <Link href="/about"><span className='underline cursor-pointer'>Terms of Use</span></Link></p>
            </div>
        </footer>
    )
}