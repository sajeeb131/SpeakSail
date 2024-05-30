import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const SpecialActivity = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return(
        <div className='guide-General'>
        <Navbar></Navbar>
        <div className="header-guide">Guide</div>
        <div className="navbar-guideGeneral">
        <Link to='/guide' className="navbar-button">General</Link>
        <button className="navbar-button active">Special Activities</button>
        <div className="navbar-dropdown">
            <button className="navbar-button" onClick={toggleDropdown}>
            Lessons <span className="arrow">{isDropdownOpen ? <GoChevronUp /> : <GoChevronDown/>}</span>
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
                <h2 className='guide-content-title'>Vocab Treasure:</h2>
                <ul className='guide-content-inlinetext'>
                    <li>Every day, a new word will be added to your list.</li>
                    <li>You'll see the word, its meaning, and how to use it in a sentence.</li>
                    <li>Try to learn the new word and use it when you talk or write!</li>
                </ul>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Daily Missions</h2>
                <ul className='guide-content-inlinetext'>
                    <li>Each day, you'll get a new fill-in-the-blank question.</li>
                    <li>Read the question, think about the answer, and type it in.</li>
                    <li>You can submit your answer to see if you're right.</li>
                    <li>If you find the question too tricky, you can choose to skip it and try another day.</li>
                </ul>
            </div>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default SpecialActivity;