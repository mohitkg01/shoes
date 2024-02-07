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
      <AiOutlineShoppingCart size={'1.5rem'} />
      <span className="cart-total-item" >{total_item}</span>
     </div> 
  )
}

export default Cart



