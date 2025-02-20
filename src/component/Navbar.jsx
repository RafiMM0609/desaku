import { useState } from "react";
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate();
    const [lsmenu, setLsmenu] = useState(false);
    return(
        <div className='fixed top-2 left-4 right-4 md:left-12 md:right-12 sm:fixed flex items-center bg-[#07575b] justify-between p-2 rounded-xl border-b-4 z-50'>
            <p className='mr-36 text-4xl font-extrabold'>
            RAF<span className="text-stone-100">FF</span>
            </p>
            <div className='hidden xl:flex space-x-4'>
                <button onClick={()=>{navigate('/wisuda');}} className='text-stone-50 flex items-center justify-center h-8 w-24'>
                    Wisuda
                </button>
                <button className='text-stone-50 flex items-center justify-center h-8 w-24'
                    onClick={() => {navigate('/');}}
                >
                    Greeting
                </button>
            </div>
            <div className='xl:hidden'>
                <button 
                    className={`${lsmenu?"opacity-0 max-h-0 max-w-0":"opacity-100"}text-stone-50 flex items-center justify-center h-8 w-20`}
                    onClick={() => setLsmenu(!lsmenu)}
                    >Menu
                </button>
                <div id="dropdown" className={`${lsmenu?"opacity-100 w-50 h-50 justify-center pl-10 items-start align-top bg-[#07575b] fixed top-2 right-2 rounded-xl border-b-4 p-2 flex flex-col":"opacity-0 max-h-0 max-w-0 pointer-events-none"} transition-all duration-500`}>
                    <a 
                        className="text-stone-100 text-lg"
                        onClick={() => {navigate('/wisuda'); setLsmenu(!lsmenu);}}
                    >Wisuda</a>
                    <a 
                        className="text-stone-100 text-lg"
                        onClick={() => {navigate('/'); setLsmenu(!lsmenu);}}
                    >Greetings</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
