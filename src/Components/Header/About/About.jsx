import React from 'react'
import './About.css';
import aboutimage from '../../../Assets/aboutus.avif'
import {Link} from 'react-router-dom'

const About = () => {
  
  return (
  <div className="row">
    <div className="about">
      <div className="aboutus">
        <h1>About us</h1>
        <p>At ShoesStore, we believe that the right pair of shoes can elevate your style and enhance your comfort.
           we have been dedicated to providing our customers with a curated selection of footwear that combines fashion and functionality.</p>
          <p>We are passionate about quality craftsmanship and only offer shoes from reputable brands known for their commitment to excellence.
             Each pair in our collection is carefully chosen to ensure it meets our high standards for durability, style, and comfort.
             At ShoesStore, we value our community and the environment. We actively seek to contribute positively to both by supporting local initiatives and offering sustainable footwear options.
              Our commitment to ethical business practices reflects our dedication to making a positive impact beyond the world of shoes.
              </p><p>Thank you for choosing ShoesStore as your go-to destination for quality footwear. We look forward to being part of your journey, one step at a time.</p>
      </div>
      <Link className="button" to="/shop">
        <button >Shop Now</button>
      </Link>
      </div>
      <div className="images">
       <img src={aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About