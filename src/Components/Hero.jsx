import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroImage from '../images/Hero.jpg';
const Hero = ({name}) => {
  return (
    <div className=' flex flex-col-reverse sm:flex-row h-auto  '>
        <div className=' p-10 lg:p-15 md:ml-36'>
            <p className=' text-slate-500 text-lg'>Welcome To</p>
            <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap'>{name.name}</h1>
            <p className='text-slate-500 sm:text-md text-sm md:text-md lg:text-lg '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Corrupti aliquam accusamus omnis <br></br>repudiandae dignissimos odio <br></br>quod labore molestias, repellendus dolorem!</p>
            <NavLink to='/product'  >
            <button className='bg-purple-700 mt-5 p-2 rounded-lg text-white font-semibold'>Shop Now</button>
            </NavLink>
        </div>
        <div className='flex items-center  flex-1 justify-center  p-3 '>
            <img src={HeroImage}  width={300} className='mt-3 sm:w-72 md:w-96 lg:w-[450px]  '/>
        </div>
    </div>
  )
}

export default Hero