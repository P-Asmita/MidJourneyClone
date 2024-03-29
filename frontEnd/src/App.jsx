import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets';
import {Home,CreatePost} from './pages';

const App = () => {
  return (
  <BrowserRouter>
  <header className='w-full flex justify-between items-center bg-white lg:px-4 
  sm: px-4 py-3 border-b border-b-[#e6ebf4]'>
  <Link to="/">
    <img src={logo} alt="logo" className='w-16 object-contain'></img>
  </Link>
  <Link to="/create-post" className='font-inter font-medium bg-[#8879B0] text-white
  px-3 py-2 rounded-md'>Create
  </Link>
  </header>
  <main className='sm:p-8 px-4 py-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
  </main>
  </BrowserRouter>
  )
}

export default App