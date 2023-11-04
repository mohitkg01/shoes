import React, { useState } from 'react';
import {FaMinus,FaPlus,FaTrash} from "react-icons/fa";
import { useCartContext } from '../Context/cartContext';

const CartItem = ({id,price,title,image}) => {

 const {removeItem}=useCartContext();
 const {total_item}=useCartContext();


  // increment and decrement of quantity
const [quantity,setQuantity]=useState(1);
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
        <figure><img src={image} alt="" /></figure>
       </div>
      <div className="row-item title">
      <p>{title}</p>
      </div>
        <div className="row-item price">
          <p>Rs{price}</p></div>
        <div className="row-item quantity">
          <div className="decrease">
            <button onClick={setDecrease}>
                <FaMinus/>
            </button>
        </div>
        <div>{quantity}</div>
        <div className="increase">
            <button onClick={setIncrease}>
                <FaPlus/>
            </button>
        </div>

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