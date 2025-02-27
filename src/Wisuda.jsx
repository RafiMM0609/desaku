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
            <p className={`opacity-100 text-2xl font-bold`}>Untuk</p>
            <p className={`opacity-100 text-2xl font-bold mb-1`}>Ibu Anggita Yunia</p>
            <p className={`opacity-100 text-2xl font-bold mb-4`}>Ibu Eni</p>
            <img 
                src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18xLmpwZyIsImlhdCI6MTc0MDYyMDc3NiwiZXhwIjoxNzQxMjI1NTc2fQ.8E_-RRqDDs-4WJTnLizMENmiprVP9vNZMnOQ0Aj9Ffo" 
                className={`${load?"opacity-100":"opacity-30  -translate-x-20"} transition-all duration-1000 w-60 h-80 rounded-t-md rounded-b-xl shadow-2xl mb-4`}
                onLoad={() => setLoad(true)} 
                onClick={() => setClimg(!climg)}
            />
            <p className={`opacity-100 text-center`}
            >🎉🎓 Dengan penuh sukacita dan rasa syukur, saya mengucapkan terima kasih yang sebesar-besarnya kepada Bapak/Ibu Dosen atas bimbingan, ilmu, dan dukungan yang telah diberikan selama masa studi saya. 🙏✨ Tanpa arahan dan motivasi dari Bapak/Ibu, saya tidak akan mampu menyelesaikan perjalanan akademik ini dengan baik. 🚀📚 Semoga Bapak/Ibu senantiasa diberikan kesehatan dan kesuksesan dalam setiap langkah. 🌟🌈 Terima kasih atas segala dedikasi dan inspirasi yang telah diberikan! 🎊🙌</p>
        </div>
        <div ref={picref} className={`transform transition-transform duration-1500 translate-x-4 md:translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            {/* <img 
                    src="https://picsum.photos/300" 
                    className={`w-45 h-60 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            /> */}
            <img 
                    src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18yLmpwZyIsImlhdCI6MTc0MDYyMDgxNywiZXhwIjoxNzQxMjI1NjE3fQ.27fRY0l748a5TMc8yCpLrthL7DG5FL-DNhO8LeKFoa0" 
                    className={`h-100 w-75 md:w-60 md:h-80 rounded-t-md rounded-b-xl shadow-2xl`}
            />
        </div>
        <div ref={picref2} className={`transform transition-transform duration-1500 -translate-x-4 md:-translate-x-40 opacity-0 items-center flex flex-row justify-center space-x-4 mt-16`}>
            <img 
                    src="https://livlimcygmeebknjkbuq.supabase.co/storage/v1/object/sign/img-ku/foto_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcta3UvZm90b18zLmpwZyIsImlhdCI6MTc0MDYyMDgzMCwiZXhwIjoxNzQxMjI1NjMwfQ.7w9UNfIfili1omr4UWS78nk0TfU8rb1PiMH6YwRUUx8" 
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


