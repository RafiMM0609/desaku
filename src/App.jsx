import { useState } from 'react'
import { useNavigate } from 'react-router';
import './App.css'

function App() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    const formJson =  Object.fromEntries(formData.entries());
    console.log(formJson);
    if(formJson.password == 'rafi'){
      navigate('/menu')
    }else{alert('wrong password')}
  }
  return (
    <div className='border-2 pb-10 pl-10 pr-10 pt-5 rounded-xl'>
    <p id="title" className='text-3xl font-semibold underline'>
      Login
    </p>
    <div id='input-data' className='text-m font-medium mt-2'>
      <form className='flex flex-col space-y-2 items-center'
        onSubmit={handleSubmit}
      >
        <>
          <p>
            Username
          </p>
          <input
          name='username'
          type='text'
          defaultValue={`user`}
          className='pl-1 text-m border-2 rounded-sm'/>
        </>
        <p>
          Password
        </p>
        <input
        name='password'
        type='password'
        defaultValue={`username`}
        className='pl-1  text-m border-2 rounded-sm'/>
        <button type='submit' className='flex items-center h-8 rounded-full bg-sky-400'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default App
