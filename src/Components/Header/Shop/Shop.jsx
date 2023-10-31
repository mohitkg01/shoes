import React from 'react'
import product from './Data';
import { NavLink } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import './Shop.css';
import { useCartContext } from '../../Context/context';
const Shop = () => {
    // console.log(product.product.items);
    // const prodt=product.product.items.map(it=>it.price);
    // const dispatch=useDispatch();
    // const addToCart=(item)=>{
    //     // dispatch(addToCart(item));
    //     console.log('cart addedd');
    // }
    const {addToCart}=useCartContext();
    
  return (
    <div className='shop' id='shop'>
        <div>
         {
            product.product.items.map((item)=>
            <div  key={item.id} className='items'>
                <img src={item.img} alt="shoes" width={'30%'} />
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <div>
                    <span>{item.rating}</span>{Array.from({length:item.rating},(_,index)=><span key={index}>⭐️</span>)}
                </div>
                <NavLink to='cart' onClick={()=>addToCart(item.id,item.price,item.title,item)}>
                <button  className='btn'>ADD TO CART</button>
                </NavLink>                
            </div>)
           
          }
          </div>
          
    </div>
  )
}

export default Shop

