import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const ReadingGuide = () => {
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
                <h2 className='guide-content-title'>Reading Lesson</h2>
                <p className='guide-content-inline'>দুটি ভিন্ন ধরনের পাঠের মাধ্যমে আপনার পড়ার দক্ষতা উন্নত করতে রিডিং কার্ডে ক্লিক করুন:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Comprehension</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong className='guide-content-name'>Read the Passage:</strong> আপনি পড়ার জন্য একটি প্যাসেজ দেখতে পাবেন। ভাল করে বুঝতে আপনার সময় নিন।</li>
                <li><strong className='guide-content-name'>Answer the Question:</strong> পড়ার পরে, আপনি উত্তরণ সম্পর্কিত একটি বহু-পছন্দের প্রশ্ন পাবেন।</li>
                <li><strong className='guide-content-name'>Select and Submit:</strong> সঠিক উত্তর চয়ন করুন এবং আপনি এটি সঠিক পেয়েছেন কিনা তা দেখতে সাবমিট টিপুন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Reading Lessons</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong className='guide-content-name'>Read Carefully:</strong> প্রতিটি অনুচ্ছেদ এবং ছবির বিবরণ পড়তে এবং বুঝতে আপনার সময় নিন।</li>
                <li><strong className='guide-content-name'>Think Before Answering:</strong> আপনি উত্তর দেওয়ার আগে প্রশ্ন বা কাজটি বুঝতে পেরেছেন তা নিশ্চিত করুন।</li>
                <li><strong className='guide-content-name'>Practice Regularly:</strong> আপনি যত বেশি পড়বেন, ততই ভালো আপনি ইংরেজি গল্প বুঝতে এবং উপভোগ করতে পারবেন।</li>
                </ul>
            </div>
            <br />
            <br />
            <p className='guide-content-inline'>এই পড়ার কার্যকলাপটি করে, আপনি লিখিত ইংরেজি বোঝার ক্ষমতা উন্নত করবেন, যা ভাষা আয়ত্ত করার একটি অপরিহার্য অংশ। আপনার পাঠ উপভোগ করুন এবং আপনার বোঝাপড়া এবং দক্ষতা বাড়ানোর মজা নিন!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default ReadingGuide;