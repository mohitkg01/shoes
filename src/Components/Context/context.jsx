import { createContext, useContext, useReducer,useEffect} from "react";
import reducer from "./cartReducer";


const CartContext=createContext();

const initialState={
    cart:[],
    total_item:0,
    total_amount:0,

};

const CartProvider=({children})=>{
    // useEffect(() => {
    //     dispatch({type:"CART_TOTAL_ITEM"})
    // },[state.cart] )
    const [state,dispatch]=useReducer(reducer,initialState);

    const addToCart=(id,price,title,item)=>{
        dispatch({type:"ADD_TO_CART", payload:{id,price,title,item}})
};

    return <CartContext.Provider value={{ ...state,addToCart}} >
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}


export {CartProvider,CartContext,useCartContext};