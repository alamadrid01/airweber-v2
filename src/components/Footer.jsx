import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Footer.scss"
import Whatsapp from "../assets/whatsap.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import "../styles/Footer.scss"

function Footer() {
  return (
    <footer>
      <div className="left">
        <h2>AIRWEBER</h2>
        <p>Contact us on different social media platforms. Lorem ipsum lorem ipsum</p>
        <div className="icons">
          <img src={Whatsapp} alt="icons" />
          <img src={Facebook} alt="icons" />
          <img src={Instagram} alt="icons" />
        </div>
      </div>
      <div className="right">
        Shortcut
      <ul>
                <li><Link className='Link' to="/">Home</Link></li>
                <li><Link className='Link' to="/our-story">Our Story</Link></li>
                <li><Link className='Link' to="/service">Services</Link></li>
                <li><Link className='Link' to="/contact">Contact Us</Link></li>
            </ul>
      </div>
    </footer>
  )
}

export default Footer