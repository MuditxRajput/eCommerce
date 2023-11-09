import Company from './Components/Company';
// import feature from './Components/feature'
// import Feature from './/Feature';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Feature from './Pages/Feature';
import { fetchProducts } from './Services/apiServices';
const Home = () => {
const[isLoading,setisLoading]= useState(true);

  useEffect(() => {
    fetchProducts();
    setisLoading(false);
    // Fetch products and store in Redux store
  }, []);
  const name = {
    name:"GenZ Store",
  }
  return (
    <>
    <div><Hero name={name}/></div>
    <div><Feature
      isLoading = {isLoading}
    /></div>
    <div><Service/></div>
    <div><Company/></div>
    <div><Footer/></div>
    </>
  )
}

export default Home