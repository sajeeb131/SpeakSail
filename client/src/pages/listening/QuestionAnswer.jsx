import React from 'react'
import { useState } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AiOutlineSound } from "react-icons/ai";
import audio from '../../assets/audio/sample-6s.mp3'
import './ListeningStyle.css'
import Footer from '../../components/Footer'

const QuestionAnswer = () => {

  const [progressPercentage, setProgress] = useState(40); 
  const [placeholder, setPlaceholder] = useState('Start Writing...');
  const handleClick = () => {
    setPlaceholder('');
  };

  const questions = [
    "What was the conversation about?",
    "What did John want from his father?",
    "What did you learn from this short conversation?"
  ]

  return (
    <div>
      <Navbar/>
      <form className='container-qa'> 
        <div className='qa-main'>
          <ProgressBar progress={progressPercentage}/>
          <div className="qa-top">
            <h1>Question/Answer</h1>
            <div className="qa-top-r">
              <AiOutlineSound size={28} color='blue'/>
              <AudioPlayer 
                source={audio}
                onPlay={e=>console.log("onPlay")}
              />
            </div>
          </div>
          <div className="qa-middle">
              <div className="qa-middle-q">
                <p>Ques 1. {questions[0]}</p>
                <textarea name="" id="" cols="50" rows="2" placeholder='Start writing...'></textarea>
              </div>
              <div className="qa-middle-q">
              <p>Ques 2. {questions[1]}</p>
                <textarea name="" id="" cols="50" rows="2" placeholder='Start writing...'></textarea>
              </div>
              <div className="qa-middle-q">
              <p>Ques 3. {questions[2]}</p>
                <textarea name="" id="" cols="50" rows="2" placeholder='Start writing...'></textarea>
              </div>

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

export default QuestionAnswer
