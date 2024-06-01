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
                <h2 className='guide-content-title'>How to use the website:</h2>
                <p className='guide-content-inline'>স্বাগতম, তরুণ শিক্ষার্থীরা! আমরা আপনাকে আমাদের প্ল্যাটফর্মে পেয়ে আনন্দিত যেখানে আপনারা মজা করে ইংরেজি শিখতে পারবেন। চলুন ঘুরে আসুন এবং দেখুন কিভাবে আপনি সবকিছু ব্যবহার করতে পারেন।</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Navigating the Navbar</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Home:</b> এখানেই আপনি শুরু করুন! আপনি এখানে ভোকাব ট্রেজার এবং প্রতিদিনের মিশন পাবেন।</li>
                <li><b className='guide-content-name'>Completion:</b> আপনার ক্রিয়াকলাপগুলিতে আপনি যে অগ্রগতি করেছেন তা দেখুন।</li>
                <li><b className='guide-content-name'>Guide:</b> আপনার যদি কখনও সাহায্যের প্রয়োজন হয়, নির্দেশের জন্য এখানে আসুন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Notification</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Stay Updated:</b> পৃষ্ঠার শীর্ষে বিজ্ঞপ্তি আইকন আপনাকে সর্বশেষ খবরের সাথে আপডেট রাখবে।</li>
                <li><b className='guide-content-name'>Earn Badges:</b> আপনি যখন নির্দিষ্ট মাইলস্টোন সম্পূর্ণ করবেন, তখন আপনি ব্যাজ অর্জন করবেন। আপনি যখন একটি নতুন ব্যাজ অর্জন করেছেন তখন আপনাকে জানাতে একটি বিজ্ঞপ্তি পপ আপ হবে৷</li>
                <li><b className='guide-content-name'>View Notifications:</b> নতুন অর্জিত ব্যাজ এবং গুরুত্বপূর্ণ আপডেট সহ আপনার সাম্প্রতিক সমস্ত বিজ্ঞপ্তিগুলির একটি তালিকা দেখতে বিজ্ঞপ্তি আইকনে ক্লিক করুন৷</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Profile</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>View Profile Information:</b> প্রোফাইল বিভাগে, আপনি সাইন আপ করার সময় আপনার দেওয়া সমস্ত তথ্য দেখতে পাবেন।</li>
                <li><b className='guide-content-name'>Track Your Progress:</b> আপনি কতটা সম্পন্ন করেছেন তা দেখতে আপনার সম্পূর্ণ পাঠের পরিসংখ্যান দেখুন।</li>
                <li><b className='guide-content-name'>Lessons Completed:</b> প্রতিটি ভাষার দক্ষতায় আপনি কতগুলি পাঠ শেষ করেছেন তা দেখুন।</li>
                </ul>
            </div>  
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default Guide;