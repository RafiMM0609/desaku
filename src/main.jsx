// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Boxncross from './Boxncross.jsx'
import Menu from './Menu.jsx'
import Greetings from './Greetings.jsx'
import Wisuda from './Wisuda.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Routes>
      <Route path='/' element={<App />}/>
    </Routes> */}
    <Routes>
      <Route path='/menu' element={<Menu />}/>
    </Routes>
    <Routes>
      <Route path='/' element={<Boxncross />}/>
    </Routes>
    <Routes>
      <Route path='/wisuda' element={<Wisuda />}/>
    </Routes>
    {/* <Routes>
      <Route path='/greet' element={<Greetings />}/>
    </Routes> */}
  </BrowserRouter>,
)
