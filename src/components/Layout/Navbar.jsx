import React from 'react'
import dragonIcon from '../../assets/images/dragon-helmet.png'
import { Search } from "lucide-react";

function Navbar() {
  return (
    <>
    <nav className='w-full h-auto fixed flex justify-center items-center top-0 md:h-32'>
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