import React from 'react'
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} className='logo' alt="" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <button className='btn'>Contact Us</button>
        </ul>
    </nav>
  )
}

export default Navbar
