import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

export default function CartProduct({prod,index})
{
    const dispatch=useDispatch();
    const info=`${prod.description.substr(0,85)}`
    return(
        <div>
            {
                index>0 
                &&
                <div className="w-[100%] h-[2px] bg-black mb-[3rem]">
                </div>
                
            }
            <div className=" flex justify-between text-[#373737] mb-[3rem]">
                <img src={prod.image} alt="" className="w-[18rem] h-[16rem] object-contain"/>
                <div className="w-[25rem]">
                    <p className="text-[1.5rem] font-bold mb-8">{prod.title}</p>
                    <p className="mb-8">{info}</p>
                    <div className="flex justify-between">
                        <p className="text-green-400">${prod.price}</p>
                        <div 
                            onClick={()=>
                                {
                                    dispatch(removeFromCart(prod.id))
                                    toast.warn("Item Removed From Cart", {
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
                            className="bg-red-400 rounded-full relative w-[2rem] h-[2rem] cursor-pointer group hover: text-red-200">
                            <MdDelete className="text-red-950 absolute top-[4px] right-[3px] group-hover:text-[#ffff]" size={`1.5rem`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}