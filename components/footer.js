import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-neutral-300 border-black border-t-2'>
            <div className='py-20'>
                <Link href='/'>
                    <div className='flex items-center cursor-pointer justify-center'>
                        <img alt='Logo' src='/logo.svg' className='max-w-xs' />
                    </div>
                </Link>
            </div>

            <div className='bg-black text-white text-center text-sm'>
                <p className='py-1'>By minting a slot you agree with the <Link href="/about"><span className='underline cursor-pointer'>Terms of Use</span></Link></p>
            </div>
        </footer>
    )
}