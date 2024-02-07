import React from 'react'
import product from './Data';

import './Shop.css';
import { useCartContext } from '../../Context/cartContext';
const Shop = () => {
    
    const {addToCart}=useCartContext();
  return (
    <div className='shop' id='shop'>
        <div className='itemm'>
         {
            product.product.items.map((item)=>
            <div  key={item.id} className='items'>
                <img src={item.img} alt="shoes" width={'30%'} />
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <div>
                    <span>{item.rating}</span>{Array.from({length:item.rating},(_,index)=><span key={index}>⭐️</span>)}
                </div>
                <button  onClick={()=>addToCart(item.id,item.price,item.title,item)} className='btn'>ADD TO CART</button>              
            </div>)
          }
          </div>
    </div>
  )
}

export default Shop

