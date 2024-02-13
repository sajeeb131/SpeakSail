import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LogoWhite.png'
import './navbar.css'

const InitialNav = () => {
    const navigate = useNavigate();
    const onClick = () =>{
        navigate('/')
    }
  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <ul className='nav-link'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to="/objective">Objective</Link></li>
                <li><Link to="/what-we-offer">What We Offer</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li><Link to="/about-us">About us</Link></li>
            </ul>
            <div className='buttons'>
                <button className='btn login-btn'>Login</button>
                <button className='btn signup-btn'>Signup</button>
            </div>
        </div>
    </>
  )
}

export default InitialNav