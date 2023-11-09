// apiService.js
import axios from 'axios';
// import { setProducts } from './productSlice';
import { setProducts } from '../reduxToolkit/productSlice';
// import store from './store'; // Import your Redux store
import store from '../reduxToolkit/store';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    const pro = await response.data;
    store.dispatch(setProducts(pro));
    // store.dispatch(setProducts(await(response.data)));
    // setisLoading(false);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
