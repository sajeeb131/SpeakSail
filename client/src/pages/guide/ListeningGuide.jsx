import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const ListeningGuide = () => {
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
                <h2 className='guide-content-title'>Listening Lesson</h2>
                <p className='guide-content-inline'>আপনার শোনার দক্ষতা উন্নত করার দুটি উত্তেজনাপূর্ণ উপায় অন্বেষণ করতে লিসেনিং কার্ডে ক্লিক করুন:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Sentence Dictation</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong className='guide-content-name'>Choose an Exercise:</strong> শুরু করার জন্য উপলব্ধ ব্যায়ামগুলির মধ্যে একটি নির্বাচন করুন।</li>
                    <li><strong className='guide-content-name'>Audio Dictation:</strong> আপনাকে একটি পৃষ্ঠায় নিয়ে যাওয়া হবে যেখানে একটি অডিও ক্লিপ একটি বাক্য চালাবে৷</li>
                    <li><strong className='guide-content-name'>Type What You Hear:</strong> মনোযোগ সহকারে শুনুন এবং প্রদত্ত পাঠ্য বাক্সে বাক্যটি টাইপ করুন।</li>
                    <li><strong className='guide-content-name'>Submit Your Answer:</strong> একবার আপনি সম্পন্ন হলে, আপনি কতটা ভাল করেছেন তা দেখতে আপনার উত্তর জমা দিন।</li>
                    <li><strong className='guide-content-name'>Can't Listen Now:</strong> আপনি যদি সেই মুহুর্তে শুনতে না পারেন তবে "এখনই শোনা যাবে না" বোতামে ক্লিক করুন। এটি 
                    আপনাকে ব্যায়াম নির্বাচন পৃষ্ঠায় ফিরিয়ে নিয়ে যাবে যাতে আপনি একটি ভিন্ন কার্যকলাপ চেষ্টা করতে পারেন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Question and Answer</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong className='guide-content-name'>Listen to the Audio:</strong> একটি অডিও ক্লিপ প্লে হবে, আপনাকে একটি ছোট গল্প বা তথ্য বলবে।</li>
                    <li><strong className='guide-content-name'>Answer the Questions:</strong> শোনার পরে, আপনি যা শুনেছেন তার সাথে সম্পর্কিত প্রশ্নগুলি দেখতে পাবেন।</li>
                    <li><strong className='guide-content-name'>Submit Your Answers:</strong> আপনার উত্তর টাইপ করুন এবং আপনার বোঝার পরীক্ষা করতে সেগুলি জমা দিন।</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Tips for Listening Lesson</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong className='guide-content-name'>Find a Quiet Place:</strong> নিশ্চিত করুন যে আপনি একটি শান্ত জায়গায় আছেন যাতে আপনি স্পষ্টভাবে অডিও শুনতে পারেন।</li>
                    <li><strong className='guide-content-name'>Listen Carefully:</strong>অডিওতে বিস্তারিত মনোযোগ দিন।</li>
                    <li><strong className='guide-content-name'>Take Your Time:</strong> তাড়াহুড়ো করবেন না। উত্তর দেওয়ার আগে যতবার প্রয়োজন ততবার শুনুন।</li>
                    <li><strong className='guide-content-name'>Practice Regularly:</strong> আপনি যত বেশি অনুশীলন করবেন, আপনি যা শুনেছেন তা বোঝার এবং মনে রাখতে আপনি তত বেশি ভাল পাবেন।</li>
                </ul>
            </div>  
            <br />
            <br />
            <p className='guide-content-inline'>এই শোনার কার্যকলাপগুলি অনুশীলন করে, আপনি কথ্য ইংরেজি বোঝার ক্ষমতা উন্নত করবেন, যা ভাষা শেখার একটি গুরুত্বপূর্ণ অংশ। আপনার পাঠগুলি উপভোগ করুন এবং আপনার দক্ষতা উন্নত করার মজা নিন!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default ListeningGuide;