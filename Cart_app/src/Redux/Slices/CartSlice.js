import { createSlice} from "@reduxjs/toolkit"

const initialState={
    data:[],
    cart:[]
}

export const CartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            addData:(state,action)=>{
                state.data=action.payload;
            },
            addToCart:(state,action)=>
            {
                state.cart.push(action.payload);
            },
            removeFromCart:(state,action)=>{
                state.cart=state.cart.filter((item)=>{
                    return item.id!==action.payload;
                });
            }
        }
    }
)



export const {addData,addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;

