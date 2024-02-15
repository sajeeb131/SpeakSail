import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LogoWhite.png'
import './navbar.css'
import image from "../assets/images/student.jpg"


const InitialNav = () => {
    const navigate = useNavigate();
    // const onClick = () =>{
    //     navigate('/')
    // }
    const [profilePic, setProfilePic] = useState(image);

  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <ul className='nav-link'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to="/classroom">Classroom</Link></li>
                <li><Link to="/club">Club</Link></li>
                <li><Link to="/practice">Practice</Link></li>
                <li><Link to="/guide">Guide</Link></li>
            </ul>
            <div className='buttons'>
                <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <g clip-path="url(#clip0_22_43)">
                            <path d="M14.3326 32.5542C14.132 32.4227 13.9404 32.2793 13.7589 32.125H21.2411C21.0596 32.2793 20.868 32.4227 20.6674 32.5542C19.7262 33.1712 18.6254 33.4999 17.5 33.4999C16.3746 33.4999 15.2738 33.1712 14.3326 32.5542Z" fill="#002E88" stroke="#002E88" stroke-width="3"/>
                            <path d="M28.6781 10.356L28.6829 10.3731L28.688 10.39L31.2196 18.7359C31.4821 19.6014 31.5382 20.5162 31.3835 21.4073C31.2289 22.2983 30.8677 23.1407 30.3289 23.8671C29.7901 24.5934 29.0888 25.1835 28.281 25.5901C27.4732 25.9966 26.5814 26.2084 25.677 26.2083H25.677H8.88135C8.00419 26.2083 7.1385 26.0091 6.3496 25.6257L5.69388 26.9747L6.3496 25.6257C5.56069 25.2422 4.86919 24.6846 4.32727 23.9949C3.78535 23.3051 3.40717 22.5013 3.22128 21.6441C3.03538 20.7869 3.04663 19.8986 3.25416 19.0464L3.25418 19.0463L5.22002 10.9715L5.22323 10.9583L5.22621 10.945C5.81619 8.31513 7.26782 5.9577 9.35062 4.24704C11.4334 2.53638 14.028 1.57053 16.7224 1.50286C19.4168 1.43519 22.0566 2.26956 24.2227 3.87351C26.3887 5.47746 27.9569 7.75904 28.6781 10.356Z" fill="#002E88" stroke="#002E88" stroke-width="3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_22_43">
                            <rect width="35" height="35" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
                <Link to="/profile/ProfilePage" className='navbar-avatar'>
                    <img src={profilePic} alt=""/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default InitialNav