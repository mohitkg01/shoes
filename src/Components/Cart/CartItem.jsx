import React from 'react'

const CartItem = ({id,price,title,item}) => {
  return (
    <div className="container">
      <div className="title">
      <p>{title}</p>
      </div>
        <div className="price">
          <p>{price}</p></div>
        <div className="remove">
          <button>remove</button>
        </div>
    </div>
  )
}

export default CartItem