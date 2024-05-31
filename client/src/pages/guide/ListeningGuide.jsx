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
                <p className='guide-content-inline'>Click on the Listening card to explore two exciting ways to improve your listening skills.</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Sentence Dictation</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong>Choose an Exercise:</strong> Select one of the available exercises to get started.</li>
                    <li><strong>Audio Dictation:</strong> You'll be taken to a page where an audio clip will play a sentence.</li>
                    <li><strong>Type What You Hear:</strong> Listen carefully and type out the sentence in the text box provided.</li>
                    <li><strong>Submit Your Answer:</strong> Once you're done, submit your answer to see how well you did.</li>
                    <li><strong>Can't Listen Now:</strong> If you can't listen at that moment, click the "Can't Listen Now" button. This will take you 
                        back to the exercise selection page so you can try a different activity.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Question and Answer</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong>Listen to the Audio:</strong> An audio clip will play, telling you a short story or information.</li>
                    <li><strong>Answer the Questions:</strong> After listening, you'll see questions related to what you just heard.</li>
                    <li><strong>Submit Your Answers:</strong> Type in your answers and submit them to check your understanding.</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Tips for Listening Lesson</h2>
                <ul className='guide-content-inlinetext'>
                    <li><strong>Find a Quiet Place:</strong> Make sure you are in a quiet place so you can hear the audio clearly.</li>
                    <li><strong>Listen Carefully:</strong> Pay close attention to the details in the audio.</li>
                    <li><strong>Take Your Time:</strong> Don't rush. Listen as many times as you need before answering.</li>
                    <li><strong>Practice Regularly:</strong> The more you practise, the better you'll get at understanding and remembering what you hear.</li>
                </ul>
            </div>  
            <br />
            <br />
            <p className='guide-content-inline'>By practising these listening activities, you'll improve your ability to understand spoken English, which is an important part of learning the language. Enjoy your lessons and have fun improving your skills!</p>
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default ListeningGuide;