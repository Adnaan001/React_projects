import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import { FaShoppingCart } from "react-icons/fa";
import Home from './components/Home'
import CartPage from './components/CartPage'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


function App() {

  const cart=useSelector((s)=>s.cart.cart);
  console.log('cart=>',cart);
  console.log('length is =>',cart.length);
  return (
    <div className='w-[100%] h-[100%] p-[0.1px]'>
      <div className='app fixed w-[100%] z-10'>
        <div className='w-10/12 flex justify-between mx-auto'>
          <NavLink to={`/`}>
            <img src="./src/assets/logo_UrbanCart.png" alt="UrbanCart" className='w-[15rem] cursor-pointer'/>
          </NavLink>
          <div className='flex gap-5 relative'>
            <NavLink to={`/`}  className='self-center cursor-pointer text-[1.2rem] font-bold text-white'>
              <p>Home</p>
            </NavLink>
            <NavLink to={`/cart`} className='self-center cursor-pointer' >
              <FaShoppingCart size={'1.4rem'} color='white'/>
            </NavLink>
            {
              cart.length>0 &&
                <div className='ani absolute bg-green-500 rounded-full w-[1.5rem] h-[1.5rem] text-white font-bold text-center top-[12px] right-[-0.8rem]'>
                    {cart.length}
                </div>
            }
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App
