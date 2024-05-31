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
                <p className='guide-content-inline'>Click on the Writing card to practise your writing skills with a fun activity:</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Picture Description</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong>View the Image:</strong> You'll see a picture showing a scenario.</li>
                    <li><strong>Describe the Scene:</strong> Write a description of what you see in the picture. Use as many details as you can to explain the scene.</li>
                    <li><strong>Submit Your Description:</strong> After writing, submit your description to complete the activity.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Tips for Writing Lesson</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong>Be Observant:</strong> Look carefully at the picture and notice all the details.</li>
                    <li><strong>Use Descriptive Words:</strong> Try to use a variety of words to make your description interesting.</li>
                    <li><strong>Practice:</strong> The more you write, the better you'll get at describing scenes.</li>
                </ul>
            </div>
            <br />
            <br />
            <p className='guide-content-inline'>By practising this writing activity, you'll enhance your ability to express yourself clearly in English. Enjoy your lessons and have fun developing your creativity and skills!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default WritingGuide;