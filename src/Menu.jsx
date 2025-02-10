import { useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

function Menu() {
  const navigate = useNavigate();
  return (
  <>
    <div className='flex items-center justify-between xl:w-300 sm:w-60 p-2 rounded-xl bg-sky-400'>
      <p className='text-4xl font-extrabold'>
        LOGO
      </p>
      <div className='hidden xl:flex space-x-4'>
        <button className='flex items-center justify-center h-8 w-16'>
          About
        </button>
        <button className='flex items-center justify-center h-8 w-16'
          onClick={() => {navigate('/');}}
        >
          Logout
        </button>
      </div>
      <div className='xl:hidden'>
        <button className='flex items-center justify-center h-6 w-12'>Menu</button>
      </div>
    </div>
    <div id='section1' className='flex mt-8 mb-4 border-2 rounded-lg'>
      <div id='card'
        className='bg-stone-300 flex flex-col items-center w-60 p-2 rounded-lg
        hover:border-4 hover:border-stone-400'>
        <p className='text-xl font-semibold'>
          Kopi
        </p>
        <img src='https://picsum.photos/300' alt='kopi' className='mt-2 rounded-lg'/>
        <p className='text-sm text-start font-semibold'>
          Kopi Adalah salah satu minuman favorit semua umat manusia mungkin??
        </p>
      </div>
    </div>
    <div id='section2' className='flex border-2 rounded-lg justify-between items-center px-4 space-x-1.5'>
      <img src='https://picsum.photos/400'
        className='rounded-lg hover:animate-pulse'
      />
      <p className='text-2xl font-medium text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </>
  )
}

export default Menu
