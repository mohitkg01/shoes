import React from 'react'
import './Contact.css'
import {AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoPinterestAlt} from 'react-icons/bi'
const Contact = () => {
  return (
    <div className="contact">
        <div className="text">    
            <span>ShoesStore</span>
            <span>YOU CAN CONTACT US DIRECTLY AT :</span>
            <span>contact@shoesstore</span>
            <span>Or you write us via contact form</span>
            <span>we answer as quick as possible</span>
          <div className="icon-c">
            <a href="http//twitter.com"><AiOutlineTwitter/></a>
            <a href="https//Facebook.com"><AiOutlineFacebook/></a>
            <a href="https//instagram.com"><AiOutlineInstagram/></a>
            <a href="https//pintrest.com"><BiLogoPinterestAlt/></a>
          </div>
        </div>
        <div className="form">
          <div className="names">
          <label htmlFor="">Name</label>
          <input type="text" />
          </div>
          <div className="email">
          <label htmlFor="">Email</label>
          <input type='email' />
          </div>
          <div className="phone">
            <label htmlFor="">Contact No</label>
            <input type="number" />
          </div>
          <div className="comment">
            <label htmlFor="">Comments</label>
            <input type="text" />
          </div>
          <div className="send">
          <button>Send</button>
          </div>
          
        </div>
    </div>
  )
}

export default Contact