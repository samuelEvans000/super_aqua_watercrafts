import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navLogo'>
        <Link to='/'>
        <img src='/assets/navLogo.png' />
        </Link>
      </div>
      <div className='navList'>
        <Link to='/'>
        <p>Home</p>
        </Link>
        <Link to='/aboutUs'>
        <p>About Us</p>
        </Link>
        <Link to="/waterRecycling">
        <p>Water Recycling</p>
        </Link>
        <Link to='/johkasouTechnology'>
        <p>Johkasou Technology</p>
        </Link>
        <Link to='/installation'>
        <p>Our Installation</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
