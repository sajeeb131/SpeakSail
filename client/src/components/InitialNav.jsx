import React from 'react'
import { Link } from 'react-scroll';
import {  useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LogoWhite.png'
import './navbar.css'

const InitialNav = () => {
    const navigate = useNavigate();
    const onClick = () =>{
        navigate('/')
    }
    const handleClickLoginStudent = () => {
        navigate('/login/student');
    };

    const handleClickLoginTeacher = () => {
        navigate('/login/teacher');
    };

  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <ul className='nav-link'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to="objective" smooth={true} duration={500}>Objective</Link></li>
                <li><Link to="what-we-offer" smooth={true} duration={500}>What We Offer</Link></li>
                <li><Link to="tools" smooth={true} duration={500}>Tools</Link></li>
                <li><Link to="about-us" smooth={true} duration={500}>About us</Link></li>
            </ul>
            <div className='buttons'>
                <button className='btn login-btn' onClick={handleClickLoginStudent}>Student</button>
                <button className='btn login-btn' onClick={handleClickLoginTeacher}>Teacher</button>
            </div>
            
        </div>
    </>
  )
}

export default InitialNav