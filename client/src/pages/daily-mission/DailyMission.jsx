import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './DailyMission.css'

const DailyMission = () => {
    return (
        <div className="daily-mission">
            <Navbar />
            <section className="daily-mission-inner">
                <div className="whole-container">
                    <div className="lesson-heading">
                        <div className="heading">
                            <div className="daily-heading">
                                <h2 className="daily">Daily</h2>
                            </div>

                            <div className="mission-heading">
                                <div className="mission">Mission</div>
                            </div>
                        </div>

                        {/* Main Section */}
                        <div className="main-section">
                            <div className="task-instruction">
                                <h4>Complete the following sentence by using the correct word.</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};


export default DailyMission;