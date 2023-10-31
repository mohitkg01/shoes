import React from 'react'
import CartItem from './CartItem'
import { useCartContext } from '../Context/context';
import './Cart.css'

const Cartpage = () => {

  const {cart}=useCartContext();
  
  return (
    <div className="container">
      <div className="title">
      <p>title</p>
      </div>
        <div className="price">
        <p>price</p>
        </div>
        <div className="remove">
          <p>remove</p>
        </div>
        
        <div className="cart-item">
            {cart.map((curElem)=>{
                return <CartItem key={curElem.id} {...curElem}/>
            })}
        </div>
    </div>
  )
}

export default Cartpage