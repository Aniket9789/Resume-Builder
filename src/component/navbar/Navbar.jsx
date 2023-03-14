import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="shadow">
                <div className='logo'> <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/image_19400_1_5042248765.png" alt="" /></div>
                <div className='container' style={{maxWidth:'1610px'}}>
                    <div className='link'>
                        <NavLink to="/Resume Template"><span>Resume Template</span></NavLink>
                        <NavLink to="My Resume"><span>My Resume</span></NavLink>
                        <NavLink to="About Us"><span>About Us</span></NavLink>
                        <span className='saprater'></span>
                        <span>
                        <button className='btn btn-light'>Log In </button>
                        <button className='btn btn-light'>Sign Up</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
