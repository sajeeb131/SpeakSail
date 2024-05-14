import React from 'react'
import 'boxicons'
import LogoWhite from '../assets/images/speaksailLogo.png'
import './teacherNav.css'
import { Link, useNavigate } from 'react-router-dom';

const teacherNav = () => {
  return (
    <div className="teacherNavbar">
    <div className="logo">
      <img src={LogoWhite} alt='Logo'></img>
    </div>
    <div className="links">
      <ul>
        <li>
            <Link to='/teachers/dashboard'>
            <box-icon type='solid' name='dashboard'></box-icon>
            Dashboard
            </Link>
        </li>
        <li>
            <Link to='/teachers/classes'>
            <box-icon name='desktop' ></box-icon>
            Classes
            </Link>
        </li>
        <li>
            <Link to='/teachers/students'>
            <box-icon name='child' ></box-icon>
            Classes
            </Link>
        </li>
        <li>
            <Link to='/teachers/resources'>
            <box-icon name='coin-stack' type='solid' ></box-icon>
            Resources
            </Link>
        </li>
        <li>
            <Link to='/teachers/upload'>
            <box-icon name='upload' ></box-icon>
            Upload
            </Link>
        </li>
      </ul>
    </div>
    <div className="logout">
      <button>
        <box-icon name='upload' ></box-icon>
        Logout
      </button>
    </div>
  </div>
  )
}

export default teacherNav