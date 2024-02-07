import React, { useState } from 'react';
import {FaMinus,FaPlus,FaTrash} from "react-icons/fa";
import { useCartContext } from '../Context/cartContext';
import './CartItem.css'

const CartItem = ({id,price,title,image,quant}) => {

 const {removeItem}=useCartContext();
  
  // increment and decrement of quantity
  const [quantity,setQuantity]=useState(quant);


  const setDecrease=()=>{
      if(quantity>1){
     setQuantity(quantity-1);
    }
  }
  const setIncrease=()=>{
      setQuantity(quantity+1);
    
  }

  return ( 
      <div className="row">
      <div className="row-item img">
        <img src={image} alt="" />
        <p>{title}</p>
        <p>Rs{price}</p>
        </div>
      <div className="row-item quantity">
            <button onClick={setDecrease}>
                <FaMinus/>
            </button>
        <div>{quantity}</div>
            <button onClick={setIncrease}>
                <FaPlus/>
            </button>
      </div>
        <div className="row-item subtotal">
          <p>Rs</p>
          <span>{price * quantity}</span>
        </div>
        <div className="row-item remove">
          <FaTrash className="icon" onClick={()=>removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem