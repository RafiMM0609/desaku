function Navbar() {
    return(
        <div className='fixed top-2 left-10 xl:left-12 sm:fixed flex items-center justify-between xl:w-300 sm:w-60 p-2 rounded-xl border-b-4'>
            <p className='mr-36 text-4xl font-extrabold'>
            RAF<span className="text-stone-100">FF</span>
            </p>
            <div className='hidden xl:flex space-x-4'>
                <button className='text-stone-50 flex items-center justify-center h-8 w-16'>
                    About
                </button>
                <button className='text-stone-50 flex items-center justify-center h-8 w-16'
                    onClick={() => {navigate('/');}}
                >
                    Logout
                </button>
            </div>
            <div className='xl:hidden'>
                <button className='text-stone-50 flex items-center justify-center h-6 w-12'>Menu</button>
            </div>
        </div>
    )
}

export default Navbar;