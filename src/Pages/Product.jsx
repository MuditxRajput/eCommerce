import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchProducts } from './Service/apiService'; // Import your API service function

const Product = () => {
  const products = useSelector((state) => state.products.data);



  return (
    <div>
      <h2>Product List</h2>
      {/* {console.log(products)}
      {console.log("hi")} */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
