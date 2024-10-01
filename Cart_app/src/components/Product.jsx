import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Slices/CartSlice";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Product({prod})
{
    let cart=useSelector((s)=>s.cart.cart);
    const isInCart=cart.some((item)=>item.id===prod.id);
    const [added,setAdded]=useState(isInCart);
    // useEffect(()=>{
    //     setAdded(isInCart)
    // },[])
    const dispatch=useDispatch();
    let title=`${prod.title.substr(0,11)}...`;
    let info=`${prod.description.substr(0,85)}...`;
    return (
        <div className="sm:w-[100%] md:w-[45%] lg:w-[23%] h-[30rem] border border-[#d7d7d7] rounded-md p-4 flex flex-col gap-y-4 group hover:scale-110 transition-transform duration-300">
            <h2 className="text-center text-[1.5rem]">{title}</h2>
            <p className="text-[#a0a0a0d9] text-[0.7rem]">{info}</p>
            <img src={prod.image} alt="image" className="w-full h-[15rem] object-contain self-center "/>
                <div className="flex mt-auto justify-between">
                    <p className="text-[#11e81f] text-[1.2rem]">${prod.price}</p>
                    {
                        added?
                        (
                            <button
                                onClick={()=>{

                                    dispatch(removeFromCart(prod.id))
                                    setAdded(false);
                                    toast.warn("Item Removed", {
                                        position: "top-center",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        });
                                }}
                            className="border border-[#000000] rounded-full px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-[800ms] ">
                                Remove item
                            </button>
                        ):
                        (
                            <button
                                onClick={()=>{
                                    dispatch(addToCart(prod))
                                    setAdded(true);
                                    toast.success("Item Added", {
                                        position: "top-center",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        });
                                }}
                            className="border border-[#000000] rounded-full px-2 py-1 group-hover:bg-black group-hover:text-white transition-all duration-[800ms] ">
                                Add to cart
                            </button>
                        )
                    }
                </div>

        </div>
    )
}