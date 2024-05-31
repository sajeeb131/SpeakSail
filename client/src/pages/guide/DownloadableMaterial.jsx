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
                <p className='guide-content-inline'>Below the lessons section, you will 
                find another section called Downloadable Materials. Here, you can find additional 
                practice materials for each of the four language skills. These materials can be 
                downloaded and used offline.</p>
            </div>
            <div className="guide-content-navigation">
                <h2 className='guide-content-title'>Listening Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Audio and Worksheets:</b> Each set includes an audio clip and a worksheet.</li>
                <li><b>Listen to the Audio:</b> Play the audio clip to practice your listening skills.</li>
                <li><b>Complete the Worksheet:</b> Follow the instructions on the worksheet related to the audio you heard.</li>
                </ul>
            </div>
            <div className="guide-content-notifications">
                <h2 className='guide-content-title'>Speaking Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Short Prompts:</b> You'll find prompts to help you practice speaking.</li>
                <li><b>Talk About the Prompt:</b> Use the prompts to create short speeches or stories. Record yourself if possible to listen back and improve.</li>
                </ul>
            </div>
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Reading Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Real-Life Comprehensions:</b> These are small comprehension passages based on real-life situations.</li>
                <li><b>Read the Passage:</b> Carefully read the given passage.</li>
                <li><b>Answer the Questions:</b> Answer the questions based on the passage to check your understanding.</li>
                </ul>
            </div>  
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Writing Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Writing Prompts:</b> Each prompt comes with a list of suitable words to use in your essay.</li>
                <li><b>Read the Prompt:</b> Think about the prompt and what you want to write.</li>
                <li><b>Use the Words:</b> Incorporate the suggested words into your writing to help structure your essay.</li>
                <li><b>Write Your Essay:</b> Write a complete essay based on the prompt.</li>
                </ul>
            </div>  
            <div className="guide-content-profile">
                <h2 className='guide-content-title'>Tips for Downloadable Materials:</h2>
                <ul className='guide-content-inlinetext'>
                <li><b>Use Regularly:</b> Incorporate these materials into your daily study routine to enhance your skills.</li>
                <li><b>Check Your Work:</b> After completing an activity, review your work to see where you can improve.</li>
                <li><b>Ask for Feedback:</b> if possible, ask a parent to review your work and provide feedback.</li>
                </ul>
                <br/>
                <br/>
                <p className='guide-content-inline'>By using these downloadable materials, you can practice and improve your English skills even when you're not online.<br/> <b style = {{color: '#00008b'}}>Happy learning!</b></p>
            </div>  
        </div>
        
        <Footer></Footer>
        </div>
    );
}

export default DownloadableMaterial;