import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import './GuideGeneral.css';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const DownloadableMaterial = () => {
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
            <button className="navbar-button active">Downloadable Materials</button>
        
        </div>
        <div className="guide-content">
            <header className="guide-content-header">
            <h1 className="guide-content-header">Welcome to SpeakSail!</h1>
            </header>
            <div className="guide-content-intro">
                <h2 className='guide-content-title'>Downloadable Materials</h2>
                <p className='guide-content-inline'>পাঠ বিভাগের নীচে, আপনি ডাউনলোডযোগ্য উপকরণ নামে আরেকটি বিভাগ পাবেন। এখানে,
                 আপনি চারটি ভাষার দক্ষতার জন্য অতিরিক্ত অনুশীলন সামগ্রী পেতে পারেন। এই উপকরণগুলি ডাউনলোড এবং অফলাইনে ব্যবহার করা যেতে পারে।</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Listening Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Audio and Worksheets:</b> প্রতিটি সেটে একটি অডিও ক্লিপ এবং একটি ওয়ার্কশীট রয়েছে।</li>
                <li><b className='guide-content-name'>Listen to the Audio:</b> আপনার শোনার দক্ষতা অনুশীলন করতে অডিও ক্লিপটি চালান।</li>
                <li><b className='guide-content-name'>Complete the Worksheet:</b> আপনি যে অডিও শুনেছেন তার সাথে সম্পর্কিত ওয়ার্কশীটে নির্দেশাবলী অনুসরণ করুন।</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Speaking Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Short Prompts:</b> কথা বলার অভ্যাস করতে সাহায্য করার জন্য আপনি প্রম্পট পাবেন।</li>
                <li><b className='guide-content-name'>Talk About the Prompt:</b> ছোট বক্তৃতা বা গল্প তৈরি করতে প্রম্পট ব্যবহার করুন। ফিরে শুনতে এবং উন্নতি করতে সম্ভব হলে নিজেকে রেকর্ড করুন।</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Reading Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Real-Life Comprehensions:</b> এগুলি বাস্তব জীবনের পরিস্থিতির উপর ভিত্তি করে ছোট বোঝার অনুচ্ছেদ।</li>
                <li><b className='guide-content-name'>Read the Passage:</b> প্রদত্ত অনুচ্ছেদটি মনোযোগ সহকারে পড়ুন।</li>
                <li><b className='guide-content-name'>Answer the Questions:</b> আপনার বোঝাপড়া পরীক্ষা করার জন্য প্যাসেজের উপর ভিত্তি করে প্রশ্নের উত্তর দিন।</li>
                </ul>
            </div>  
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Writing Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Writing Prompts:</b> প্রতিটি প্রম্পট আপনার প্রবন্ধে ব্যবহার করার জন্য উপযুক্ত শব্দগুলির একটি তালিকা নিয়ে আসে।</li>
                <li><b className='guide-content-name'>Read the Prompt:</b> প্রম্পট সম্পর্কে চিন্তা করুন এবং আপনি কি লিখতে চান।</li>
                <li><b className='guide-content-name'>Use the Words:</b> আপনার প্রবন্ধ গঠনে সাহায্য করার জন্য প্রস্তাবিত শব্দগুলিকে আপনার লেখায় অন্তর্ভুক্ত করুন।</li>
                <li><b className='guide-content-name'>Write Your Essay:</b> প্রম্পটের উপর ভিত্তি করে একটি সম্পূর্ণ রচনা লিখুন।</li>
                </ul>
            </div>  
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Tips for Downloadable Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b className='guide-content-name'>Use Regularly:</b> আপনার দক্ষতা বাড়াতে আপনার দৈনন্দিন অধ্যয়নের রুটিনে এই উপকরণগুলিকে অন্তর্ভুক্ত করুন।</li>
                <li><b className='guide-content-name'>Check Your Work:</b> একটি কার্যকলাপ সম্পূর্ণ করার পরে, আপনি কোথায় উন্নতি করতে পারেন তা দেখতে আপনার কাজ পর্যালোচনা করুন।</li>
                <li><b className='guide-content-name'>Ask for Feedback:</b> যদি সম্ভব হয়, একজন শিক্ষক বা অভিভাবককে আপনার কাজ পর্যালোচনা করতে এবং প্রতিক্রিয়া জানাতে বলুন।</li>
                </ul>
                <br/>
                <br/>
                <p className='guide-content-inline'>এই ডাউনলোডযোগ্য উপকরণগুলি ব্যবহার করে, আপনি অনলাইনে না থাকলেও আপনি আপনার ইংরেজি দক্ষতা অনুশীলন এবং উন্নত করতে পারেন।<br/> <b style = {{color: '#00008b'}}>Happy learning!</b></p>
            </div>  
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default DownloadableMaterial;