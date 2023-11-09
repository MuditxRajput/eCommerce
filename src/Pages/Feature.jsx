import React from 'react';
import { useSelector } from 'react-redux';
import Electronics from '../categories/Electronics';
import Jewelry from '../categories/Jewelry';
import MenProducts from '../categories/MenProducts';
import WomenProduct from '../categories/WomenProduct';
const Feature = ({isLoading})=> {
  // const products = useSelector((state) => state.products.data);
  const categoriesProducts = useSelector((state)=>state.products.categories);

  return (
    <div>
      <h2>Product Details</h2>
      
      <div className='grid grid-cols-4'>
        <MenProducts products ={categoriesProducts.men}
        isLoading = {isLoading}
        />
        <WomenProduct products ={categoriesProducts.women}
        isLoading = {isLoading}
        />
        <Jewelry products ={categoriesProducts.jewelry}
        isLoading = {isLoading}
        />
        <Electronics products ={categoriesProducts.electronics}
        isLoading = {isLoading}
        />
        
      </div>

      
      
    </div>
  );
};

export default Feature