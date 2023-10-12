import React, { useEffect } from 'react'
import img from '../Assets/shoes.jpg'
import './Style.css'
import Data from './Data';
const Home = () => {

  return (
    <div>
      <img  className='image'src={img} alt="headerImage" />\
      <div>{<Data/>}</div>
    </div>
  )
}

export default Home