import React,{useContext, useState} from 'react'
import Card from './Card'
import './Item.css'
import ItemForm from './ItemForm'
import CartContext from './CartContext'
const Item = (props) => {
  
  const cartCtx=useContext(CartContext);

  const addToCarthandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (<>
  <Card>
        <h1>{props.name}</h1>
        <div>{props.price}</div>
        <div>
          <ItemForm onAddCart={addToCarthandler}/>
        </div>
  </Card>
  </>
    

  )
}

export default Item