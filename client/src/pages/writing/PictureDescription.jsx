import React from 'react'
import { useState } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'
// import { AiOutlineSound } from "react-icons/ai";
// import audio from '../../assets/audio/sample-6s.mp3'
import './PictureDescription.css'
import image from "../../assets/images/PD-Family_stress.png"
import Footer from '../../components/Footer'


const PictureDescription = () => {

  const [progressPercentage, setProgress] = useState(40); 
  const [placeholder, setPlaceholder] = useState('Start Writing...');
  const handleClick = () => {
    setPlaceholder('');
  };

  const images = [
    // "What was the conversation about?",
    // "What did John want from his father?",
    // "What did you learn from this short conversation?"
  ]

  return (
    <div>
        <Navbar/>
        
            <form className='container-pd'> 
            <div className='pd-main'>
            <ProgressBar progress={progressPercentage}/>
                <div className="pd-top">
                    <h1>Picture Description</h1>
                    <div className="pd-top-image">
                    <img src={image} alt="" />
                    </div>

                </div>
                <div className="pd-middle">
                    <input type="text" placeholder='Start Writing...' />

                </div>
            
            </div>
            {/* <hr className="sd-horizontal-line"/>
            <div className='container-sd-button'>
                
                <button className='sd-button1'>Can't listen now</button>
                <button className='sd-button2'>Submit</button>
                
            </div> */}
        </form>
        <Footer/>
        </div>
    
  )
}

export default PictureDescription
