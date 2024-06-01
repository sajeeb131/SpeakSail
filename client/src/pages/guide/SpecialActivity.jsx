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
                <Link to='/guide/ListeningGuide' className="dropdown-item">Listening Lesson</Link>
                <Link to='/guide/SpeakingGuide' className="dropdown-item">Speaking Lesson</Link>
                <Link to='/guide/ReadingGuide' className="dropdown-item">Reading Lesson</Link>
                <Link to='/guide/WritingGuide' className="dropdown-item">Writing Lesson</Link>
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
                    <li>প্রতিদিন, আপনার তালিকায় একটি নতুন শব্দ যুক্ত হবে।</li>
                    <li>আপনি শব্দটি, এর অর্থ এবং একটি বাক্যে এটি কীভাবে ব্যবহার করবেন তা দেখতে পাবেন।</li>
                    <li>নতুন শব্দ শেখার চেষ্টা করুন এবং আপনি যখন কথা বলবেন বা লিখবেন তখন এটি ব্যবহার করুন!</li>
                </ul>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Daily Missions</h2>
                <ul className='guide-content-inlinetext'>
                    <li>প্রতিদিন, আপনি একটি নতুন প্রশ্ন পূরণ করবেন।</li>
                    <li>প্রশ্নটি পড়ুন, উত্তর সম্পর্কে চিন্তা করুন এবং টাইপ করুন।</li>
                    <li>আপনি সঠিক কিনা তা দেখতে আপনার উত্তর জমা দিতে পারেন।</li>
                    <li>আপনি যদি প্রশ্নটি খুব জটিল মনে করেন, আপনি এটি এড়িয়ে যেতে এবং অন্য দিন চেষ্টা করতে পারেন।</li>
                </ul>
            </div>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default SpecialActivity;