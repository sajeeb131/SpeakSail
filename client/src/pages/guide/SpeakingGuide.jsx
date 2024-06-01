import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const SpeakingGuide = () => {
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
                <h2 className='guide-content-title'>Speaking Lesson</h2>
                <p className='guide-content-inline'>একটি মজার কার্যকলাপের সাথে আপনার কথা বলার দক্ষতা অনুশীলন শুরু করতে স্পিকিং কার্ডে ক্লিক করুন:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Storytelling</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong className='guide-content-name'>Get a Prompt:</strong> আপনাকে একটি প্রম্পট দেওয়া হবে, যা আপনার গল্পের জন্য একটি ধারণা বা বিষয়।</li>
                <li><strong className='guide-content-name'>Record Your Story:</strong> প্রম্পট সম্পর্কে চিন্তা করুন এবং আপনার নিজের কথায় একটি গল্প তৈরি করুন। রেকর্ডিং টুল ব্যবহার করে আপনার গল্প রেকর্ড করুন।</li>
                <li><strong className='guide-content-name'>Submit Your Recording:</strong> আপনি আপনার রেকর্ডিং নিয়ে খুশি হওয়ার পরে, কার্যকলাপ সম্পূর্ণ করতে এটি জমা দিন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Speaking Lesson</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong className='guide-content-name'>Be Creative:</strong> আপনার গল্প আকর্ষণীয় এবং মজার করতে আপনার কল্পনা ব্যবহার করুন.</li>
                <li><strong className='guide-content-name'>Speak Clearly:</strong> স্পষ্টভাবে কথা বলতে ভুলবেন না যাতে আপনার গল্প বোঝা সহজ হয়।</li>
                <li><strong className='guide-content-name'>Practice:</strong> জমা দেওয়ার আগে আরও স্বাচ্ছন্দ্য বোধ করার জন্য কয়েকবার রেকর্ড করার চেষ্টা করুন।</li>
                </ul>
            </div>  
            <br />
            <br />
            <p className='guide-content-inline'>এই কথার কার্যকলাপটি অনুশীলন করে, আপনি ইংরেজিতে কার্যকরভাবে যোগাযোগ করার ক্ষমতা বাড়াবেন। আপনার পাঠ উপভোগ করুন এবং আত্মবিশ্বাস ও দক্ষতা তৈরি করার মজা নিন!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default SpeakingGuide;