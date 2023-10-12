import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import Cart from './Cart'
const Header = () => {
  return (
    <div>
      <div className='header'>
      <button className='btn'>
            <Link to="/">Home</Link></button>
      <button className='btn2'>
          <Link to="/admin">Admin</Link></button>
          <Cart />
      </div>
     </div>
  )
}

export default Header