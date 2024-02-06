import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './HomePage.css'
const HomePage = () => {
    const [username, setUsername] = useState("Username");
    const [overallProgress, setOverallProgress] = useState(50);
    const progressStyle = {
        width: `${overallProgress}%`
    };
    const [listeningProgress, setListeningProgress] = useState(60);
    const [speakingProgress, setSpeakingProgress] = useState(45);
    const [readingProgress, setReadingProgress] = useState(28);
    const [writingProgress, setWritingProgress] = useState(10);
    const progressStyles = {
        listening: {
            width: `${listeningProgress}%`
        },
        speaking: {
            width: `${speakingProgress}%`
        },
        reading: {
            width: `${readingProgress}%`
        },
        writing: {
            width: `${writingProgress}%`
        }
    };
  return (
    <div className='container-homepage'>
        <Navbar/>
        {/* part 1: heading */}
        <div className='container-homepage-header'>
            <h1>Welcome back, <span>{username}</span></h1>
        </div>
        {/* part 2: progress bar */}
        <div className='container-homepage-progress'>
            <div className='container-homepage-progress-bar'>
                <div>
                    <h1>Your overall progress</h1>
                </div>
                <div className='container-homepage-progress-bar-line'>
                    <div className="progress-bar" style={progressStyle}></div>
                </div>
            </div>
        </div>
        {/* part 3: vocab treasure, daily mission */}
        <div></div>
        
        {/* part 4: lessons */}
        <div className='container-homepage-lessons'>
            <div>
                <h1>Lessons</h1>
            </div>
            <div className='container-homepage-lessons-half'>
                <div className='container-homepage-lessons-indv'>
                    <h2>Listening</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar" style={progressStyles.listening}></div>
                    </div>
                </div>
                <div className='container-homepage-lessons-indv'>
                    <h2>Speaking</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar" style={progressStyles.speaking}></div>
                    </div>
                </div>
            </div>
            <div className='container-homepage-lessons-half'>
                <div className='container-homepage-lessons-indv'>
                    <h2>Reading</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar" style={progressStyles.reading}></div>
                    </div>
                </div>
                <div className='container-homepage-lessons-indv'>
                    <h2>Writing</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar" style={progressStyles.writing}></div>
                    </div>
                </div>
            </div>
        </div>
        {/* part 5: materials */}
    </div>
  )
}

export default HomePage
