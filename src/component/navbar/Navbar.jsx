import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="shadow">
                <div className='nav-logo'> <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/image_19400_1_5042248765.png" alt="" /></div>
               <div className='conlink'>
               <div className='navcontainer'>
                    <div className='link'>
                        <NavLink to="/resumetemplate"><span>Resume Template</span></NavLink>
                        <NavLink to="/myresume"><span>My Resume</span></NavLink>
                        <NavLink to="/about"><span>About Us</span></NavLink>
                    </div>
                </div>
                <div className='btncontainer'>
                    <button className='navbtn1'>Log In </button>
                    <button className='navbtn2'>Sign Up</button>
                </div>
               </div>
            </div>
        </>
    )
}

export default Navbar



