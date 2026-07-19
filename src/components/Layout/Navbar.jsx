import React, { useState, useEffect } from 'react'
import dragonHelmet from '../../assets/images/dragon-helmet.png'

function Navbar() {
    return (
        <nav className='w-full h-23 flex bg-transparent justify-center items-center fixed z-50 top-0 left-0'>
            <div className='w-auto h-16 bg-white/10 backdrop-blur-md shadow-xl rounded-full'>
                <div className='w-full h-full flex justify-center items-center gap-6 px-10 py- text-white font-lexend'>
                    <a href="">About</a>
                    <a href="">Experience</a>
                    <a className='w-full h-full flex justify-center items-center' href=""><img src={dragonHelmet} className='w-auto h-full'/></a>
                    <a href="">Project</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar