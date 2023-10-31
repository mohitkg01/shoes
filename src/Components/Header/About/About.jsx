import React from 'react'
import './About.css';
import aboutimage from '../../../Assets/aboutus.avif'


const About = () => {
  
  return (
  <div className="row">
    <div className="about">
      <div className="aboutus">
        <h1>About us</h1>
        <p>At Bag Store, our mission is to redefine the way you experience bags. We believe that a bag is not just an accessory;
           it's an extension of your personality and a statement of your style. Our commitment is to craft and curate a collection 
            of bags that seamlessly blend fashion, function, and durability.</p>
          <p>We are passionate about bags in all their forms, from sleek and sophisticated to casual and carefree.
           Our mission is to provide you with a diverse range of high-quality bags that cater to your unique needs
            and preferences, whether you're a trendsetter, a practical traveler, a professional on-the-go, or an adventure 
            enthusiast. Sustainability and ethics are at the core of our values. We are dedicated to
          sourcing eco-friendly materials and ensuring ethical practices throughout our supply chain.
           We believe in making responsible choices that not only enhance your bag experience but also contribute to a better world.</p>
      </div>
      <div className="button">
        <button>Shop Now</button>
      </div>
      </div>
      <div className="images">
       <img src={aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About