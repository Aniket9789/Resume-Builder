import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
        <div className='logo'> <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/image_19400_1_5042248765.png"  alt="" /></div>
        <div className='link'>
        <NavLink to="/Resume Template"><span>Resume Template</span></NavLink>
        <NavLink to="My Resume"><span>My Resume</span></NavLink>
        <NavLink to="About Us
        "><span>About Us</span></NavLink>
            
        </div>
        </div>
    )
}

export default Navbar
