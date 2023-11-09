import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs";
import { FiAlignJustify } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import Cart from '../Pages/Cart';
// const Header = () => {
    
//     let carIteam = 1;
//     const[isDrawerOpen,setDrawerOpen] =  useState(false)
//     const toggle=()=>{
//         setDrawerOpen(!isDrawerOpen);
//     }
//     return(
//             <header>
//                 <div className=' w-full h-10 bg-black flex justify-between items-center'>
//                     <div className="text-white text-sm  sm:text-xl lg:text-2xl  font-serif font-semibold flex items-center px-4 py-1 whitespace-nowrap mb-2 sm:mb-0">e-Commerce</div>
//                     <div className="  invisible sm:visible sm:flex gap-3 sm:gap-6 lg:gap-10">
//                         <NavLink to='/' className={"text-white"}>
//                             Home
//                         </NavLink>
//                         <NavLink to='/about' className={"text-white"}>
//                             About 
//                         </NavLink>
//                         <NavLink to='/product' className={"text-white"}>
//                             Products
//                         </NavLink>
//                         <NavLink to='/contact' className={"text-white"}>
//                             Contact
//                         </NavLink>
                        
//                     </div>
//                     <div className='flex justify-between items-center gap-4 sm:gap-6 lg:gap-8 mr-4'>
//                             <BsSearch className="text-white cursor-pointer "/>
//                             <AiOutlineHeart className='text-white cursor-pointer '/>
//                             {
//                                 <Link to={'/Cart'}>
//                                  <AiOutlineShoppingCart className='text-white cursor-pointer'  />
//                             {carIteam>0 &&<span className='text-white text-sm absolute -top-0 -right-0 bg-red-500  rounded-full px-2'>{carIteam}</span>}
//                                 </Link>
//                             }
//                     </div>

//                     <div className='sm:hidden'>
//                             <FiAlignJustify className='text-white mr-5 cursor-pointer  ' onClick={toggle} />
//                     </div>
//                 </div>

//                 {isDrawerOpen && (
//                     <div className='sm:hidden fixed inset-0 bg-black bg-opacity-75 z-50'>
//                         <div className='flex justify-end p-4'>
//                             <RxCross1 className='text-white cursor-pointer' onClick={toggle}/>
//                         </div>
//                         <div className='flex flex-col justify-center gap-2 text-xl items-center'>
//                         <NavLink to='/' className={"text-white"} onClick={toggle}>
//                             Home
//                         </NavLink>
//                         <NavLink to='/about' className={"text-white"} onClick={toggle}>
//                             About
//                         </NavLink>
//                         <NavLink to='/product' className={"text-white" } onClick={toggle}>
//                             Products
//                         </NavLink>
//                         <NavLink to='/contact' className={"text-white"} onClick={toggle} >
//                             Contact
//                         </NavLink>
//                         <NavLink to='/cart' className={"text-white"} onClick={toggle} >
//                             Cart
//                         </NavLink>
//                         </div>
//                     </div>
//                 )}
//                 {/* {cartOpen && <Cart isCartOpen ={isCartOpen} />} */}
//             </header>
//     )
// };

// export default Header;

// import { useState } from 'react';
// import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsSearch } from "react-icons/bs";
// import { FiAlignJustify } from 'react-icons/fi';
// import { RxCross1 } from 'react-icons/rx';
// import Cart from '../Cart/Cart';

const Header = () => {
    const nav = ["Home" , "Categories" ,"Contact us", "About us"]
    const[isDrawerOpen, setDrawerOpen] = useState(false)
    let carIteam = 1;
    const toggle=()=>
    {
        setDrawerOpen(!isDrawerOpen);
    }
    const[cartOpen, isCartOpen] = useState(false)
   
    return(
            <header>
                <div className=' w-full h-10 bg-black flex   justify-between items-center'>
                    <div className="text-white text-sm  sm:text-xl lg:text-2xl  font-serif font-semibold flex items-center px-4 py-1 no-wrap mb-2 sm:mb-0">e-Commerce</div>
                    <div className=" hidden sm:visible sm:flex gap-3 sm:gap-6 lg:gap-10">
                        <NavLink to='/' className={"text-white"}>
                                Home
                                </NavLink>
                                <NavLink to='/about' className={"text-white"}>
                                    About 
                                </NavLink>
                                <NavLink to='/product' className={"text-white"}>
                                    Products
                                </NavLink>
                                <NavLink to='/contact' className={"text-white"}>
                                    Contact
                                </NavLink>
                        
                    </div>
                   <div className='flex justify-between items-center gap-4 sm:gap-6 lg:gap-8 mr-4'>
                          <BsSearch className="text-white cursor-pointer "/>
                            <AiOutlineHeart className='text-white cursor-pointer '/>
                          <AiOutlineShoppingCart className='text-white cursor-pointer' />
                           {carIteam>0 &&<span className='text-white text-sm absolute -top-0 -right-0 bg-red-500  rounded-full px-2'>{carIteam}</span>}
                    </div>
                    <div className='sm:hidden'>
                            <FiAlignJustify className='text-white mr-5 cursor-pointer  ' onClick={toggle} />
                    </div>
                </div>

                 {isDrawerOpen && (
                    <div className='sm:hidden fixed inset-0 bg-black bg-opacity-75 z-50'>
                        <div className='flex justify-end p-4'>
                            <RxCross1 className='text-white cursor-pointer' onClick={toggle}/>
                        </div>
                        <div className='flex flex-col items-center'>
                          {nav.map((val,index)=>{
                            return <div className='text-white text-xl my-2 cursor-pointer'> {val} </div>
                          })}
                        </div>
                    </div>
                )}
                {cartOpen && <Cart isCartOpen ={isCartOpen} />}
            </header>
    )
};

export default Header;

