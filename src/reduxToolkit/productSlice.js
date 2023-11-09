// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {data:[],categories:{}},
  reducers: {
    setProducts: (state, action) => {
       state.data = action.payload;
       state.categories = classifyProductsByCategory(action.payload);
    },
  },
});

const classifyProductsByCategory=(products)=>{
  const categories ={
    men:[],
    women:[],
    electronics:[],
    jewelry : [],
  }
  products.forEach((products)=>{
      if(products.category==="men's clothing")
      {
        categories.men.push(products);
      }
      else if(products.category==='jewelery')
      {
        categories.jewelry.push(products);
      }
      else if(products.category==='electronics')
      {
        categories.electronics.push(products);
      }
      else if(products.category==="women's clothing")
      {
        categories.women.push(products)
      }
    });
    return categories;

};

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
