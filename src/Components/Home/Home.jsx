import React from 'react'
import img from '../../Assets/shoes.jpg'
import './Home.css'
import {FcShipped} from 'react-icons/fc'
import {IoMdCash} from 'react-icons/io'
import {MdSupportAgent} from 'react-icons/md'
// import Data from '../Data';
const Home = () => {

  return (
    <div>
      <img  className='image'src={img} alt="headerImage" />\
      {/* <div>{<Data/>}</div> */}
      <div className="icons">
        <div className="icon">
        <span><FcShipped/></span>
        <span>Free Shipping</span>
        <span>Free Shipping all over orders</span>
        </div>
        <div className="icon">
        <span><IoMdCash/></span>
        <span>Cash On Delivery</span>
        <span>Cash On Delivery available</span>
        </div>
        <div className="icon">
        <span><MdSupportAgent/></span>
        <span>Online Assistance</span>
        <span>24/7 Online Assistance available</span>
        </div>
      </div>
    </div>
  )
}

export default Home