import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { FaMicrophoneAlt } from "react-icons/fa";
import "./StorytellingStyle.css"

const Storytelling = () => {
    const [progressPercentage, setProgress] = useState(40); 
    const [story, setStory] = useState("If i was right, If i was right, If i was right, If i was right, If i was right, If i was right, If i was right, If i was right, If i was right, If i was right, the street lights had gone off and I was returning. You will get 2 minutes to complete this story. Click the record button once you are ready and submit your answer.");

    

    return (
        <div>
        <Navbar/>
        
            <form className='container-st'> 
            <div className='st-main'>
            <ProgressBar progress={progressPercentage}/>
            <div className="st-top">
                <h1>Storytelling</h1>
                <div className='st-para'>
                    <p className='st-para-p'> {story}</p>
                </div>
                
                
            </div>
            <div className='st-middle'>
                <button onSubmit="false" className='st-record-btn'>
                    <FaMicrophoneAlt/>
                    <span>Record</span>
                </button>
            </div>
            
            
            </div>
            <hr className="sd-horizontal-line"/>
            <div className='container-sd-button'>
                
                <button className='sd-button1'>Can't listen now</button>
                <button className='sd-button2'>Submit</button>
                
            </div>
        </form>
        <Footer/>
        </div>
        
    )
}

export default Storytelling
