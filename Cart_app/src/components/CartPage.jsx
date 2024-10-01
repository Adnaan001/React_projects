import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartProduct from "./CartProduct";

export default function CartPage(){
    const cart=useSelector((s)=>s.cart.cart);
    const total=cart.reduce((acc,crntval)=>acc+crntval.price,0);
    console.log('in cart page cart.length=>',cart.length)

    return(
        <div className="mt-[8rem] w-9/12 mx-auto flex flex-wrap gap-x-[2rem] gap-y-[3rem] justify-center  min-h-[100vh]">
                {
        cart.length===0?
        (
            <div className='my-auto'>
                <p className="font-bold"> CART IS EMPTY</p>
                <NavLink to={`/`}>
                    <button className="bg-green-500 p-4 rounded-full mt-4 text-white font-bold">
                        Shop now
                    </button>
                </NavLink>

            </div>
        ):
        (
            <div className="w-[100%] h-[100%] flex lg:flex-row gap-8 flex-col ">
                <div className="w-[60%]">
                    {cart.map((prod,index)=>(
                        <CartProduct key={prod.id} prod={prod} index={index} />
                    ))}

                </div>
                <div className="w-[40%] flex flex-col justify-between text-[#373737]">
                    <div className="mt-[3rem] ml-[2rem]">
                        <p className="text-green-700 font-bold text-[1.2rem]">YOUR CART</p>
                        <p className="text-green-700 font-bold text-[4rem] leading-[4rem]">SUMMARY</p>
                        <p className=" font-bold leading-[4rem]">Total Items: {cart.length}</p>
                    </div>
                    <div className="ml-[2rem]">
                        <p className="font-bold text-[1.5rem] my-4">Total Amount: ${total}</p>
                        <button className="bg-green-800 text-white mb-12 px-8 py-4 rounded-lg font-bold hover:bg-white hover:border hover:border-green-800 hover:text-green-800 transition-all duration-500"> 
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>

        )
    }
        </div>
    )
}