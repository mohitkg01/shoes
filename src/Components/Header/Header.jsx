import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import Cart from '../Cart/Cart'
const Header = () => {
  return (
    <div className="main">
      <div className="name">
        <Link to="home">ShoesStore</Link>
      </div>
      <div className="header">
        <Link to="shop">Shop</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div className="cart">
      <Link to='cart'><Cart/></Link> 
      </div>
    </div>
  )
}

export default Header