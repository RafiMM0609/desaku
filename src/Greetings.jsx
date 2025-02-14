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
    "Dream big and dare to fail."
  ];
  const [isgreet, setIsgreet] = useState(false);
  const [ismessage, setIsmessage] = useState("");
  const [bravetext, setBravetext] = useState("WELCOME");

  async function signup(prevState, formData){
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    const name = formData.get("name");
    const male = formData.get("male")?true:false;
    const gender = male?"mr":"mrs";
    try{
      const greeting_message = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setIsmessage(greeting_message);;
      setIsgreet(true);
      setBravetext(`Please remember ${gender} ${name}`)
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
      <form id='signup-form' action={signupAction} className={`${isgreet ? "hidden" : "flex flex-col md:flex-row"} transition-all ease-linear duration-1000 m-2 p-1 items-start space-x-2`}>
        <label htmlFor='name' className='font-medium mb-1'>Name</label>
        <input className="mb-2 h-8 p-2 border-stone-50 border-2 rounded-lg" name='name' id='name' placeholder='your name...'/>
        <div className='flex flex-row w-30 mb-4 space-x-0.5'>
          <input id="male" className="peer/draft" type="radio" name="male"/>
          <label htmlFor="draft" className="peer-checked/draft:text-sky-500 lg:mr-2 mr-6">Male</label>
          <input id="female" className="peer/published" type="radio" name="female" />
          <label htmlFor="published" className="peer-checked/published:text-sky-500">Female</label>
        </div>
        <button className='flex items-center h-8'>Submit</button>
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
