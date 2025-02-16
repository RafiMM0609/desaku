import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from './component/Navbar';
function Wisuda(){
    // const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [climg, setClimg] = useState(false);
    return(
        <>
        <Navbar/>
        <div className={`items-center flex flex-col justify-center ${climg?"opacity-0 max-h-0 max-w-0":"opacity-100"} transition-opacity duration-500`}>
            <div className={`${climg?"opacity-0 max-h-0 max-w-0":"opacity-100"} flex flex-row`}>
                <p className="animate-bounce text-2xl md:text-8xl">🎊</p>
                <p className={`${load? "opacity-100": "opacity-30 -translate-y-10" } md:text-8xl transition-all duration-1000 font-bold text-4xl mx-1`}>Selamat Wisuda</p>
                <p className="animate-bounce text-2xl md:text-8xl">🎊</p>
            </div>
            <p className={`${climg?"opacity-0 max-h-0 max-w-0":"opacity-100"} text-2xl font-bold`}>Sodara</p>
            <p className={`${climg?"opacity-0 max-h-0 max-w-0":"opacity-100"} text-2xl font-bold`}>Rafi Muhammad Mahrus S.T</p>
            <img 
                src="https://picsum.photos/300" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
            />
            <p className={`${climg?"opacity-0 max-h-0 max-w-0":"opacity-100"} text-center`}
            >Selamat atas kelulusanmu! 🎓✨ Hari ini adalah bukti dari kerja keras, ketekunan, dan semangat juangmu selama ini. Perjalanan yang penuh tantangan telah berhasil kamu lalui, dan kini lembaran baru dalam hidup telah terbuka. Jangan pernah berhenti bermimpi dan teruslah melangkah menuju masa depan yang gemilang. Ingat, wisuda bukanlah akhir, tetapi awal dari petualangan baru yang lebih besar. Semoga ilmu dan pengalaman yang telah kamu dapatkan membawa keberkahan serta kesuksesan di setiap langkah yang kamu ambil. Selamat meraih mimpi dan menginspirasi banyak orang! 🚀👏</p>
        </div>
        <div className={`items-center flex flex-col justify-center ${climg?"opacity-100":"opacity-0 max-h-0 max-w-0"} transition-all duration-500 space-y-2`}>
        <img 
                src="https://picsum.photos/300" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
        />
        <img 
                src="https://picsum.photos/300" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
        />
        </div>
        </>
    )
}

export default Wisuda;