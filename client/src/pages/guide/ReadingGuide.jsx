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
                <p className='guide-content-inline'>Click on the Reading card to improve your reading skills with two different types of lessons:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Comprehension</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong>Read the Passage:</strong> You'll see a passage to read. Take your time to understand it well.</li>
                <li><strong>Answer the Question:</strong> After reading, you'll find a multiple-choice question related to the passage.</li>
                <li><strong>Select and Submit:</strong> Choose the correct answer and press submit to see if you got it right.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Reading Lessons</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong>Read Carefully:</strong> Take your time to read and understand each passage and picture description.</li>
                <li><strong>Think Before Answering:</strong> Make sure you understand the question or task before you answer.</li>
                <li><strong>Practice Regularly:</strong> The more you read, the better you'll get at understanding and enjoying English stories.</li>
                </ul>
            </div>
            <br />
            <br />
            <p className='guide-content-inline'>By doing this reading activity you'll improve your ability to comprehend written English, which is an essential part of mastering the language. Enjoy your lessons and have fun expanding your understanding and skills!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default ReadingGuide;