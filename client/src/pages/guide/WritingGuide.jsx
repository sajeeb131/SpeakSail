import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const WritingGuide = () => {
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
            <Link to='/guide/SpecialActivity' className="navbar-button">Special Activities</Link>
            <div className="navbar-dropdown">
                <button className="navbar-button active" onClick={toggleDropdown}>
                Lessons <span className="arrow">{isDropdownOpen ? <GoChevronUp /> : <GoChevronDown/>}</ span>
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
                <h2 className='guide-content-title'>Writing Lesson</h2>
                <p className='guide-content-inline'>একটি মজার কার্যকলাপের সাথে আপনার লেখার দক্ষতা অনুশীলন করতে রাইটিং কার্ডে ক্লিক করুন:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Picture Description</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong className='guide-content-name'>View the Image:</strong> আপনি একটি দৃশ্য দেখায় একটি ছবি দেখতে পাবেন।</li>
                    <li><strong className='guide-content-name'>Describe the Scene:</strong>আপনি ছবিতে যা দেখছেন তার একটি বর্ণনা লিখুন। দৃশ্যটি ব্যাখ্যা করার জন্য যতটা সম্ভব বিশদ ব্যবহার করুন।</li>
                    <li><strong className='guide-content-name'>Submit Your Description:</strong> লেখার পরে, কার্যকলাপ সম্পূর্ণ করতে আপনার বিবরণ জমা দিন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Writing Lesson</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong className='guide-content-name'>Be Observant:</strong> ছবিটি মনোযোগ সহকারে দেখুন এবং সমস্ত বিবরণ লক্ষ্য করুন।</li>
                    <li><strong className='guide-content-name'>Use Descriptive Words:</strong> আপনার বর্ণনা আকর্ষণীয় করতে বিভিন্ন শব্দ ব্যবহার করার চেষ্টা করুন।</li>
                    <li><strong className='guide-content-name'>Practice:</strong> আপনি যত বেশি লিখবেন, দৃশ্যগুলি বর্ণনা করতে তত ভাল পাবেন।</li>
                </ul>
            </div>
            <br />
            <br />
            <p className='guide-content-inline'>এই লেখার কার্যকলাপটি অনুশীলন করে, আপনি ইংরেজিতে স্পষ্টভাবে নিজেকে প্রকাশ করার ক্ষমতা বাড়াবেন। আপনার পাঠ উপভোগ করুন এবং আপনার সৃজনশীলতা ও দক্ষতা বিকাশের মজা নিন!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default WritingGuide;