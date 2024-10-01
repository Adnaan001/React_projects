import { useEffect, useState } from "react";
import { baseUrl } from "../../Url"
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux/Slices/CartSlice";
import Product from "./Product";

export default function Home()
{
    const dispatch=useDispatch();
    const data=useSelector((s)=>s.cart.data);
    async function fetchdata()
    {
        try{
            const res=await fetch(`${baseUrl}`);
            const output=await res.json();
            console.log('output is=>',output);
            dispatch(addData(output));
        }catch(e){
            console.log('in catch');
            console.error(e.message);
        }
    }
    useEffect(()=>
        {
            fetchdata()
        }
        ,[]);
    return(
        <div className="mt-[8rem] w-9/12 mx-auto flex flex-wrap gap-x-[2rem] gap-y-[3rem] justify-center">
            {
                data.map((prod)=>(
                    <Product key={prod.id} prod={prod}/>
                )) 
            }
        </div>
    )
}