import React from 'react'
import './Item.css'
import { useRef } from 'react';
import Input from './Input';

const ItemForm = (props) => {
    const amountInputRef=useRef();
    const submithandler=e=>{
        e.preventDefault();
       const enteredAmount=+amountInputRef.current.value;
       

       props.onAddCart(enteredAmount);
      
    }
  return (
    <form className="form" onSubmit={submithandler}>
        <Input ref={amountInputRef}  
        input={{
            type:"number",
            defaultValue:'1', 
            min:'1', 
            id:"amount"
        }}></Input>
        <button className='button'>Add item</button>
    </form>
  )
}

export default ItemForm