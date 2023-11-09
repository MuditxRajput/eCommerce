import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Home';
import About from './Pages/AboutPage';
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/ContactPage";
import Electronic from "./Pages/Electronic";
import Error from "./Pages/Error";
import Jewelery from "./Pages/Jewelery";
import MenPage from "./Pages/MenPage";
import Product from './Pages/Product';
import SingleProduct from './Pages/SingleProduct';
import WomenPage from "./Pages/WomenPage";
import './index.css';
const App =()=>{
    
    return(
        
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path ='/contact' element={<ContactPage/>} />
            <Route path ='/cart' element={<Cart/>} />
            <Route path ='/product' element={<Product/>} />
            <Route path ='/SingleProduct' element={<SingleProduct/>} />
            <Route path= '/MenPage' element={<MenPage/>} />
            <Route path= '/WomenPage' element={<WomenPage/>} />
            <Route path= '/Electronic' element={<Electronic/>} />
            <Route path= '/Jewelery' element={<Jewelery/>} />
            <Route path='*' element={<Error/>}  />
        </Routes>
        </BrowserRouter>
       
        
    )
}
export default App;