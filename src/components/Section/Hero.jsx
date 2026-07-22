import React from 'react'
import userProfile from '../../assets/images/user.png'

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <div className='w-full h-full px-10 pb-32 md:pt-32 flex flex-col lg:flex-row justify-center items-center'>
        <img className='w-full max-w-96' src={userProfile} alt="" />
        <div className='w-full max-w-ww5 relative flex flex-col justify-center items-start text-left'>
          <h1 className='text-5xl md:text-6xl xl:text-8xl font-lexend font-bold text-white'>Welcome to {" "} Rittergeistworks.</h1>
          <p className='text-white text-xl md:text-3xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae recusandae delectus libero natus nobis culpa, sit eum voluptatibus vel maxime ut adipisci provident corporis perferendis? Incidunt blanditiis ea nulla!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero