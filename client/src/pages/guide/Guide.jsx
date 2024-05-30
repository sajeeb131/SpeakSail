import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const Guide = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return(
        <div className='guide-General'>
        <Navbar></Navbar>
        <div className="header-guide">Guide</div>
        <div className="navbar-guideGeneral">
            <button className="navbar-button active">General</button>
            <Link to='/guide/SpecialActivity' className="navbar-button">Special Activities</Link>
            <div className="navbar-dropdown">
                <button className="navbar-button" onClick={toggleDropdown}>
                Lessons <span className="arrow">{isDropdownOpen ? <GoChevronUp /> : <GoChevronDown/>}</ span>
                </button>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    <button className="dropdown-item">Listening Lesson</button>
                    <button className="dropdown-item">Speaking Lesson</button>
                    <button className="dropdown-item">Reading Lesson</button>
                    <button className="dropdown-item">Writing Lesson</button>
                </div>
                )}
            </div>
            <Link to='/guide/DownloadableMaterial' className="navbar-button">Downloadable Materials</Link>
        
        </div>
        <div className="guide-content">
            <header className="guide-content-header">
            <h1 className="guide-content-header">Welcome to SpeakSail!</h1>
            </header>
            <div className="guide-content-intro">
                <h2 className='guide-content-title'>How to use the website:</h2>
                <p className='guide-content-inline'>Welcome, young learners! We're excited to have you on our platform where you can have fun while learning English.
                Let's take a tour and see how you can use everything.</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Navigating the Navbar</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Home:</b> This is where you start! You'll find the vocab treasure and daily missions here.</li>
                <li><b>Completion:</b> Check out the progress you've made on your activities.</li>
                <li><b>Guide:</b> If you ever need help, come here for instructions.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Notification</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Stay Updated:</b> The notification icon at the top of the page will keep you updated with the latest news.</li>
                <li><b>Earn Badges:</b> When you complete certain milestones, you'll earn badges. A notification will pop up to let you know when you've earned a new badge.</li>
                <li><b>View Notifications:</b> Click on the notification icon to see a list of all your recent notifications, including new badges earned and important updates.</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Profile</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>View Profile Information:</b> In the profile section, you can see all the information you provided when you signed up.</li>
                <li><b>Track Your Progress:</b> Check out the stats of your completed lessons to see how much you've accomplished.</li>
                <li><b>Lessons Completed:</b> See the number of lessons you've finished in each language skill.</li>
                </ul>
            </div>  
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default Guide;