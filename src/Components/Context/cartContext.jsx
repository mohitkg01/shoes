import { createContext, useContext, useReducer,useEffect,useState} from "react";
import reducer from "./cartReducer";


const CartContext=createContext();

const initialState={
    cart:[],
    total_item:0,
    total_price:0,
    quant:0,
};
const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    // cart item value update
    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
    },[state.cart] )
      

const addToCart=(id,price,title,item)=>{
        dispatch({type:"ADD_TO_CART", payload:{id,price,title,item}})
};



    const removeItem=(id)=>{ 
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    return <CartContext.Provider value={{ ...state,addToCart,removeItem,isCartOpen,setIsCartOpen}} >
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}


export {CartProvider,CartContext,useCartContext};