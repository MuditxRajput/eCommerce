import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/Electronic.png';
const Jewelry = ({products,isLoading}) => {
  return (
    <div>
      {isLoading === false && (
        <NavLink to={'/Jewelery'}>

        
        <div className='rounded-md shadow-lg mb-5 shadow-slate-400'>
          <img src={image} className='rounded-md p-2 w-[150px] h-[150px] cursor-pointer' alt='Electronic Product' />
        </div>
        </NavLink>
      )}
    </div>
  );
}

export default Jewelry