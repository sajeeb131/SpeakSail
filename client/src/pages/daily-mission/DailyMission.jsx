import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './DailyMission.css'

const DailyMission = () => {
    return (
        <div className="daily-mission">
            <Navbar />
                <div className="lesson-heading">
                    <div className="heading">
                        <div className="daily-heading">
                            <h2 className="daily">Daily</h2>
                        </div>

                        <div className="mission-heading">
                            <div className="mission">Mission</div>
                        </div>
                    </div>
                </div>    

                {/* Main Section */}
                <div className="main-section">
                    <div className="task-instruction">
                        <h4>Complete the following sentence by using the correct word.</h4>
                    </div>

                    <div className="answer-options-box">
                        <span className="answer-option">{'frog'}</span>
                        <span className="answer-option">{'after'}</span>
                        <span className="answer-option">{'sing'}</span>
                        <span className="answer-option">{'before'}</span>

                    </div>

                    <div className="questions">
                        <p>1. I like to <input type="text" name="answer" id="answer" /> and play the piano.</p>
                        <p>2. We went to bed <input type="text" name="answer" id="answer" /> watching TV.</p>

                    </div>

                    <div className="submission-buttons">
                        <button className="skip-button">Skip</button>
                        <button className="submit-button">Submit</button>

                    </div>
                </div>

        </div>
    );
};


export default DailyMission;