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
        <li className=''>
            <Link to='/teachers/dashboard' className='dashboard-links'>
            <box-icon type='solid' name='dashboard'></box-icon>
            <span>Dashboard</span>
            </Link>
        </li>
        <li  >
            <Link to='/teachers/classes' className='dashboard-links'>
            <box-icon name='desktop' ></box-icon>
            <span>Classes</span>
            </Link>
        </li>
        <li >
            <Link to='/teachers/resources' className='dashboard-links'>
            <box-icon name='coin-stack' type='solid' ></box-icon>
            <span>Resources</span>
            </Link>
        </li>
        <li >
            <Link to='/teachers/resources' className='dashboard-links'>
            <box-icon name='list-check'></box-icon>
            <span>Evaluation</span>
            </Link>
        </li>
        <li >
            <Link to='/teachers/upload' className='dashboard-links'>
            <box-icon name='upload' ></box-icon>
            <span>Upload</span>
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