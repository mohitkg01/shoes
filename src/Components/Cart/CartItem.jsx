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
      <div className="rowc">
      <div className="img">
        <img src={image} alt="" />
        <p>{title}</p>
        <p>Rs{price}</p>
        </div>

      <div className='row-item '>
      <div className="quantity">
            <button onClick={setDecrease}>
                <FaMinus/>
            </button>
        <div>{quantity}</div>
            <button onClick={setIncrease}>
                <FaPlus/>
            </button>
      </div>
        <div className="subtotal">
          <p>Rs</p>
          <span>{price * quantity}</span>
        </div>
        <div className="remove">
          <FaTrash className="icond" onClick={()=>removeItem(id)}/>
        </div>
        </div>
    </div>
  )
}

export default CartItem