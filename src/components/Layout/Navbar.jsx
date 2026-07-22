import React from 'react'
import dragonIcon from '../../assets/images/dragon-helmet.png'
import { Search } from "lucide-react";

function Navbar() {
  return (
    <>
<div className="fixed top-5 left-0 z-50 px-5 w-full md:hidden">
  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-5 backdrop-blur-xl">
    <Search size={18} className="text-zinc-400" />
    <input
      type="text"
      placeholder="Search..."
      className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
    />
  </div>
</div>

    <nav className='w-full h-auto fixed bottom-0 flex justify-center items-center md:top-0 md:h-32'>
        <div className='w-full h-20 flex justify-center items-center gap-6 bg-black/30 backdrop-blur-xl shadow-xl md:rounded-full border border-white/5 px-10 py-3 md:w-auto rounded-0'>
                <a className='navLink' href="">About</a>
                <a className='navLink' href="">Experience</a>
                <img className='h-full hover:scale-110 hover:-rotate-6 duration-300 transition-transform cursor-pointer' src={dragonIcon} alt="" />
                <a className='navLink' href="">Project</a>
                <a className='navLink' href="">Contact</a>
        </div>
    </nav>
    </>
)
}

export default Navbar