import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
            <div >
                <h2 className='text-4xl font-bold font-serif'>Oh No! You are Lost</h2>
            </div>
            <NavLink to="/">
            <div>
                <button className='bg-purple-700 p-2 rounded-md mt-5 text-white'>Go back</button>
            </div>
            </NavLink>
    </div>
  )
}

export default Error