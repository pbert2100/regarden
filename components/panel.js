import Link from 'next/link'

export default function Panel(props) {
    async function copyLink() {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href) 
            document.getElementById('warning').classList.remove('hidden')
        } 
    }

  return (
    <div className='flex gap-5 mt-5'>
        <button onClick={copyLink}>
            <div className='bg-black w-40 text-center cursor-pointer'>
                <div className='border-black border-2 bg-color-5 p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                    <h1>Copy Link</h1>
                </div>
            </div>
        </button>

        <Link href={"https://etherscan.io/address/" + props.link}>
            <div className='bg-black w-40 text-center cursor-pointer'>
                <div className='border-black border-2 bg-color-5 p-2 transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'>
                    <h1>Ethersan</h1>
                </div>
            </div>
        </Link>
    </div>
  )
}