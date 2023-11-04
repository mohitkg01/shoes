import React from 'react'
import CartItem from './CartItem'
import { useCartContext } from '../Context/cartContext';
import './Cart.css';
import './Cartpage.css'
import { Link } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

const Cartpage = () => {

  const {cart,total_price}=useCartContext();
  const {isCartOpen,setIsCartOpen}=useCartContext();

  const onCloseCart=(()=>{
    setIsCartOpen(false);
  })
  if (!isCartOpen) {
    return null; 
  }
  if(isCartOpen && cart.length===0){
    return (
      <div className="cartpage">
        <h3>Cart is empty</h3>
        <hr />
        <Link to='/shop' className="btn-more">
            <button>More Product</button>
            <button className='close' onClick={onCloseCart}><AiOutlineClose/></button>
          </Link>
      </div>
    )
  }
  return (
    <div className="cartpage">
      <button  className='close' onClick={onCloseCart}><AiOutlineClose/>
      </button>
      <h3>Your Cart Item</h3>
        <hr/>
        <div className="cart-item">
            {cart.map((curElem)=>{
                return <CartItem key={curElem.id} {...curElem}/>
            })}
        </div>
        <div className="total-order">
          <div className="order-amount">
            <p>Total Amount</p>
            <p>{total_price}</p>
          </div>
        </div>
        <div className="cart-buttons">
          <Link to='/shop' className="btn-more">
            <button>More Product</button>
          </Link>
          <div className='btnc'>
            <button>Purchase Now</button></div>
        </div>
        </div>
  )
}

export default Cartpage