import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './HomePage.css'
const HomePage = () => {
    const [username, setUsername] = useState("Abrar");
    const [overallProgress, setOverallProgress] = useState(50);
    const progressStyle = {
        width: `${overallProgress}%`
    };
  return (
    <div className='container-homepage'>
        <Navbar/>
        {/* part 1: heading */}
        <div className='container-homepage-header'>
            <h1>Welcome back, <span>{username}</span></h1>
        </div>
        {/* part 2: progress bar */}
        <div className='container-homepage-progress'>
            <div className='container-homepage-progress-bar'>
                <div>
                    <h1>Your overall progress</h1>
                </div>
                <div className='container-homepage-progress-bar-line'>
                    <div className="progress-bar" style={progressStyle}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
