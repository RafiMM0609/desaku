// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './Menu.jsx'
import Greetings from './Greetings.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
    <Routes>
      <Route path='/menu' element={<Menu />}/>
    </Routes>
    <Routes>
      <Route path='/greet' element={<Greetings />}/>
    </Routes>
  </BrowserRouter>,
)
