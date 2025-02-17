import { useActionState } from 'react';
import { useState } from 'react';
import './App.css'
import Navbar from './component/Navbar';

function Greetings() {
  const motivationalQuotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Opportunities don't happen. You create them.",
    "The future depends on what you do today.",
    "It always seems impossible until it's done.",
    "Do what you can, with what you have, where you are.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Dream big and dare to fail.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never. Do it now.",
    "Work hard in silence, let success make the noise.",
    "The key to success is to focus on goals, not obstacles.",
    "Difficult roads often lead to beautiful destinations.",
    "Failure is the opportunity to begin again, more intelligently.",
    "Success is not how high you have climbed, but how you make a positive difference in the world.",
    "Hustle in silence and let your success be the noise.",
    "A journey of a thousand miles begins with a single step.",
    "If you want something you've never had, you must be willing to do something you've never done.",
    "Act as if what you do makes a difference. It does.",
    "You don’t have to be great to start, but you have to start to be great."
  ];
  const [isgreet, setIsgreet] = useState(false);
  const [ismessage, setIsmessage] = useState("");
  const [bravetext, setBravetext] = useState("WELCOME");
  const [gender, setGender] = useState("");

  async function signup(prevState, formData){
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    const name = formData.get("name");
    const gengret = gender=="male"?"mr":"mrs";
    try{
      const greeting_message = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setIsmessage(greeting_message);;
      setIsgreet(true);
      setBravetext(`Please remember ${gengret} ${name}`)
    } catch (err) {
      return err.toString();
    }
  };
  const [message, signupAction] = useActionState(signup, null);
  return (
  <>
    <Navbar/>
    <div id='section1' className='hover:translate-y-1 duration-1000 flex flex-col mt-8 mb-4 border-2 rounded-lg'>
      <p id="greeting1" className='hover:animate-bounce hover:-translate-y-10 duration-1000 text-4xl font-bold'>{bravetext}</p>
      <form id='signup-form' action={signupAction} className={`${isgreet ? "hidden pointer-events-none" : "flex flex-col md:flex-row"} transition-all ease-linear duration-1000 m-2 p-1 items-start space-x-2`}>
        <label htmlFor='name' className='font-medium mb-1'>Name</label>
        <input className="mb-2 h-8 p-2 border-stone-50 border-2 rounded-lg" name='name' id='name' placeholder='your name...'/>
        <div className='flex flex-row w-30 mb-4 space-x-0.5'>
          <input 
            id="male" 
            className="peer/draft" 
            type="radio" 
            value="male" 
            name="gender"
            checked={gender == "male"} 
            onChange={(e)=>setGender(e.target.value)}  
            required
          />
          <label htmlFor="male" className="peer-checked/draft:text-sky-500 lg:mr-2 mr-6">Male</label>
          <input 
            id="female" 
            className="peer/published" 
            type="radio" 
            name="gender" 
            value="female" 
            checked={gender == "female"} 
            onChange={(e)=>setGender(e.target.value)}
            required
          />
          <label htmlFor="female" className="peer-checked/published:text-sky-500">Female</label>
        </div>
        <button className='flex items-center h-8 text-amber-50'>Submit</button>
        {/* {!!message && <p>{message}</p>} */}
      </form>
      <div id='greeting2' className={`${isgreet ? "static" : "opacity-0 max-h-0 max-w-0"} transition-all duration-1000 ease-linear`}>
        <p id="greeting3" className='border-2 rounded-lg m-8 p-4 text-2xl font-semibold text-stone-50 text-justify'>
          {ismessage}
        </p>
      </div>
    </div>
  </>
  )
}

export default Greetings
