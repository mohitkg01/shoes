import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <br />
        <div className="footerl">
            <p>@ 2023 all rights reserved</p>
        </div>
        <div className="footerr">
            <Link>FAQ</Link>
            <Link to="/home">SHOP</Link>
            <Link>Shipping & Returns</Link>
            <Link>Terms & Conditions</Link>
        </div>
    </div>
  )
}

export default Footer