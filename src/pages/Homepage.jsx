import React from 'react'
import { useNavigate } from 'react-router-dom'
import Second from '../components/homepage-section/Second'
import Third from '../components/homepage-section/Third'
import Where from '../components/homepage-section/Where'
import Work from '../components/homepage-section/Work'
import "../styles/Homepage.scss"
import Hero from "../assets/c.jpg"

function Homepage() {
  const Navigate = useNavigate()
  return (
    <>
    <div className='homepage'>
        <div className="top">
          <img src={Hero} alt="hero-image" />
        </div>
        <div className="bottom">
          <p>Who are we?</p>
          <h2>ABOUT US</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button onClick = {() => Navigate("/about")}> Read More</button>
        </div>
    </div>
    <Second />
    <Third />
    <Where />
    <Work />
    </>
  )
}

export default Homepage