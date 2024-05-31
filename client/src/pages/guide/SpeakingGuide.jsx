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
                <p className='guide-content-inline'>Click on the Speaking card to start practising your speaking skills with a fun activity:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Storytelling</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong>Listen to the Audio:</strong> An audio clip will play, telling you a short story or information.</li>
                <li><strong>Answer the Questions:</strong> After listening, you'll see questions related to what you just heard.</li>
                <li><strong>Submit Your Answers:</strong> Type in your answers and submit them to check your understanding.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Speaking Lesson</h2>
                <ul className='guide-content-inlinetext'>
                <li><strong>Be Creative:</strong> Use your imagination to make your story interesting and fun.</li>
                <li><strong>Speak Clearly:</strong> Make sure to speak clearly so your story is easy to understand.</li>
                <li><strong>Practice:</strong> Try recording a few times to get more comfortable before submitting.</li>
                </ul>
            </div>  
            <br />
            <br />
            <p className='guide-content-inline'>By practising this speaking activity, you'll enhance your ability to communicate effectively in English. Enjoy your lesson and have fun building your confidence and skills!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default SpeakingGuide;