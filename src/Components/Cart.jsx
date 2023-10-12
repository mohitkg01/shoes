import React, { useContext } from 'react'
import {ImCart} from 'react-icons/im'
import './Cart.css'
import CartContext from './CartContext'

const Cart = () => {
  const cartCtx=useContext(CartContext);
  console.log(cartCtx);
  const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
    return curNumber+item.quantity;
   },0);

  
  return (
     <button className='cart'>
        <div className='icon'><ImCart/></div>
         <div className='quantity'>{numberOfCartItems}</div>
    </button>  
  )
}

export default Cart