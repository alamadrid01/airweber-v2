import React from 'react'
import "../styles/Navbar.scss"

function Navbar() {
  return (
    <nav>
      <div className="left">
        <h2>AIRWEBER</h2>
      </div>
      <div className="right">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/story">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar