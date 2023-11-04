import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useCartContext} from '../Context/cartContext';


const Cart = () => { 
  const {total_item}=useCartContext();
  const { setIsCartOpen} = useCartContext();

  const openCart = () => {
    setIsCartOpen(true);
  };
  
  return (
     <div className="cart" id="cart" onClick={openCart}>
      {/* <Wishlist/> */}
     {/* <Popup/> */}
      <AiOutlineShoppingCart size={'1.5rem'} style={{ margin: '7px 70px 0px 62px',cursor:'pointer',color:'rgb(6 5 5)' }} />
      <span className="cart-total-item" style={{ margin: '7px 70px 0px 62px',cursor:'pointer',color:'rgb(229 55 15)' }}>{total_item}</span>
     </div> 
  )
}

export default Cart



