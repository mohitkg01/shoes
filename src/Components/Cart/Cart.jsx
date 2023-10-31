import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useCartContext} from '../Context/context'

const Cart = () => { 
  const {total_Item}=useCartContext();
 
  return (
     <div className="cart" id="cart" >
      {/* <Wishlist/> */}
     
      <AiOutlineShoppingCart size={'1.5rem'} style={{ margin: '7px 70px 0px 62px',cursor:'pointer',color:'#FF6347' }}/>
      <span className="cart-total-item">{total_Item}</span>
     
     </div> 
  )
}

export default Cart