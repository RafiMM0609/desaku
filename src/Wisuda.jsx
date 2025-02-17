import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from './component/Navbar';
function Wisuda(){
    // const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [climg, setClimg] = useState(false);
    const picref = useRef();
    const picref2 = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('translate-x-2','md:translate-x-40' ,'opacity-100');
                    entry.target.classList.remove('md:-translate-x-40', '-translate-x-4', 'opacity-0');
                }
            },
            {threshold:0.8}
        );

        if(picref2.current){observer.observe(picref2.current);}
        return ()=>{
            if(picref2.current){observer.unobserve(picref2.current);}
        };

    },[]);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('-translate-x-2', 'md:-translate-x-40' ,'opacity-100');
                    entry.target.classList.remove('md:translate-x-40','translate-x-4', 'opacity-0');
                }
            },
            {threshold:0.8}
        );
        if(picref.current){
            observer.observe(picref.current);
        }

        return () => {
            if(picref.current){
                observer.unobserve(picref.current);
            }
        };
    },[]);
    return(
        <>
        <Navbar/>
        <div className={`right-2 left-2 items-center flex flex-col justify-center mt-16 opacity-100 transition-opacity duration-500`}>
            <div className={`opacity-100 flex flex-row mb-4`}>
                <p className="animate-bounce text-2xl md:text-8xl">🎊</p>
                <p className={`${load? "opacity-100": "opacity-30 -translate-y-10" } md:text-8xl transition-all duration-1000 font-bold text-4xl mx-1`}>Selamat Wisuda</p>
                <p className="animate-bounce text-2xl md:text-8xl">🎊</p>
            </div>
            <p className={`opacity-100 text-2xl font-bold`}>Sodara</p>
            <p className={`opacity-100 text-2xl font-bold mb-4`}>Rafi Muhammad Mahrus S.T</p>
            <img 
                src="https://picsum.photos/300" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl mb-4`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
            />
            <p className={`opacity-100 text-center`}
            >Selamat atas kelulusanmu! 🎓✨ Hari ini adalah bukti dari kerja keras, ketekunan, dan semangat juangmu selama ini. Perjalanan yang penuh tantangan telah berhasil kamu lalui, dan kini lembaran baru dalam hidup telah terbuka. Jangan pernah berhenti bermimpi dan teruslah melangkah menuju masa depan yang gemilang. Ingat, wisuda bukanlah akhir, tetapi awal dari petualangan baru yang lebih besar. Semoga ilmu dan pengalaman yang telah kamu dapatkan membawa keberkahan serta kesuksesan di setiap langkah yang kamu ambil. Selamat meraih mimpi dan menginspirasi banyak orang! 🚀👏</p>
        </div>
        <div ref={picref} className={`transform transition-transform duration-1500 translate-x-4 md:translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            />
            <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
        />
        </div>
        <div ref={picref2} className={`transform transition-transform duration-1500 -translate-x-4 md:-translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            />
            <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
        />
        </div>
        </>
    )
}

export default Wisuda;


