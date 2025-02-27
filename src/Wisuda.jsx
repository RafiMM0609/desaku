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
        {/* <Navbar/> */}
        {/* <div className={`right-2 left-2 items-center flex flex-col justify-center mt-16 opacity-100 transition-opacity duration-500`}> */}
        <div className={`right-2 left-2 items-center flex flex-col justify-center mt-8 opacity-100 transition-opacity duration-500`}>
            <div className={`opacity-100 flex flex-row mb-4`}>
                <p className="animate-bounce text-4xl md:text-8xl">❤️</p>
                <p className={`${load? "opacity-100": "opacity-30 -translate-y-10" } md:text-8xl transition-all duration-1000 font-bold text-4xl mx-1`}>Terimakasih</p>
                <p className="animate-bounce text-4xl md:text-8xl">❤️</p>
            </div>
            {/* <p className={`opacity-100 text-2xl font-bold`}>Untuk</p> */}
            <p className={`opacity-100 text-l font-bold mb-1`}>Ibu Dr. Elviera Gamelia S.K.M., M.Kes (dosen pembimbing I)</p>
            <p className={`opacity-100 text-l font-bold mb-1`}>Ibu Windri Lesmas Rubai, S.Gz., M.P.H. (dosen pembimbing II)</p>
            <p className={`opacity-100 text-l font-bold mb-1`}>⁠Ibu Arrum Firda Ayu Maqfiroch, S.K.M., M.Kes (dosen penguji I) </p>
            <p className={`opacity-100 text-l font-bold mb-4`}>⁠Ibu Ifa Najiyati, S.Kp.G., MPH. <br/> (dosen penguji II)</p>
            <img 
                src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18zLmpwZyIsImlhdCI6MTc0MDYyNjA5NCwiZXhwIjoxNzQxMjMwODk0fQ.w3n0hSps4YKeJoFarQN-443aoDZmKbhisEwp6hdyslU" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl mb-4`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
            />
            <p className={`opacity-100 text-center font-semibold`}
            >Assalamualaikum Ibu Dosen Promkes yang saya sayangi</p>
            <p className={`opacity-100 text-center text-2xl`}
            >🤍</p>
            <p className={`opacity-100 text-left`}
            >Saya Anggita Yunia Nugraheni, mahasiswa peminatan Promosi Kesehatan angkatan 2021. Dengan ini mengucapkan terimakasi yang tak terhingga kepada Ibu Dosen Promkes UNSOED :</p>
            <br />
            <p className={`opacity-100 text-left`}
            >1. Ibu Dr. Elviera Gamelia S.K.M., M.Kes (dosen pembimbing I)</p>
            <p className={`opacity-100 text-left`}
            >2. Ibu Windri Lesmas Rubai, S.Gz., M.P.H. (dosen pembimbing II)</p>
            <p className={`opacity-100 text-left`}
            >3. ⁠Ibu Arrum Firda Ayu Maqfiroch, S.K.M., M.Kes (dosen penguji I) </p>
            <p className={`opacity-100 text-left`}
            >4. ⁠Ibu Ifa Najiyati, S.Kp.G., MPH. (dosen penguji II)</p>
            <br />
            <p className={`opacity-100 text-justify`}
            >Alhamdulillah, qodarullah kemarin pada tanggal 25 Februari 2025 menjadi hari bahagia bagi saya dan keluarga. Saya dan keluarga sangat berterima kasih atas bimbingan dan dukungan yang Ibu berikan selama ini kepada saya. Terimakasi atas ilmu yang diberikan terkait Promosi Kesehatan baik materi maupun paraktik. Saya ucapkan terimakasi juga atas bimbingan dan arahannya dari awal penyusunan tugas akhir skripsi saya hingga akhir. 

            Terimakasi atas waktu yang diberikan untuk proses bimbingan terkhusus untuk Ibu Elviera dan Ibu Windri selaku dosen pembimbing saya. Saya ucapkan terimakasi juga atas saran dan masukan yang diberikan Ibu Arrum dan Ibu Ifa selaku dosen penguji saya. 
            
            Saya sangat bersyukur bisa dipertemukan dan mendapat dosen-dosen seperti Ibu yang alhamdulillah selalu memudahkan dan membimbing selama masa perkuliahan saya hingga penyusunan skripsi. Saya tidak akan pernah melupakan kesempatan belajar dari Ibu dan pengalaman yang telah saya dapatkan. Terima kasih atas segalanya, Bu. Saya akan selalu mengingat Ibu sebagai salah satu orang yang telah membersamai saya untuk mencapai tujuan saya. Semoga ilmu yang telah saya dapatkan bisa menjadi keberkahan dunia akhirat dan bermanfaat bagi orang lain. 
            
            Doa dan harapan juga semoga Ibu Elviera, Bu Windri, Bu Arrum dan Bu Ifa senantiasa mendapat keberkahan dari Allah, sehat selalu, bahagia, dan dilancarkan segala urusannya. Teriiring doa dan ucapan terimakasi yang tak terhingga dari kedua orang tua saya untuk Ibu Dosen Promkes Bu Elviera, Bu Windri, Bu Ifa, dan Bu Arrum</p>
            <p className={`opacity-100 text-center`}
            >Sekali lagi saya pribadi mengucapkan terimakasi yang tak terhingga kepada seluruh Ibu Dosen Promosi Kesehatan UNSOED</p>
            <p className={`opacity-100 text-justify text-2xl`}
            >🤍🙏🏻</p>
        </div>
        <div ref={picref} className={`transform transition-transform duration-1500 translate-x-4 md:translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            {/* <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            /> */}
            <img 
                    src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18yLmpwZyIsImlhdCI6MTc0MDYyNjEyOSwiZXhwIjoxNzQxMjMwOTI5fQ.5ixmDFLYHdi37HuD0bt42o7SgmYtZtnaTRkfLKLz2vE" 
                    className={`h-100 w-75 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            />
        </div>
        <div ref={picref2} className={`transform transition-transform duration-1500 -translate-x-4 md:-translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            <img 
                    src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18xLmpwZyIsImlhdCI6MTc0MDYyNjEzOCwiZXhwIjoxNzQxMjMwOTM4fQ.xrzyIqpL0PoWLYDFGoZgxRulH70SkKsJtJwpgv9UBZU" 
                    className={`h-100 w-75 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            />
            {/* <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            /> */}
        </div>
        </>
    )
}

export default Wisuda;


