export default function Warning() {
    async function closeWarning() {
        if (typeof window !== 'undefined') {
            document.getElementById('warning').classList.add('hidden')
        } 
    }

  return (
    <div id='warning' className='bg-black bg-opacity-75 min-h-screen w-full flex justify-center items-center fixed hidden z-10'>
        <section className='flex justify-center'>
            <div className='bg-white rounded border-black border-2 max-w-md w-full p-5 text-center'>
                <p className='mb-5 text-lg'>Link copied to clipboard!</p>
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
  )
}