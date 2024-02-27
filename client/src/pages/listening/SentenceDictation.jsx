import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {MdClose} from 'react-icons/md'
import { AiOutlineSound } from "react-icons/ai";

import './ListeningStyle.css'
import './AudioPlayer.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import audio from '../../assets/audio/sample-6s.mp3'
import ProgressBar from '../../components/progress-bar/ProgressBar'
const SentenceDictation = () => {
  
  const [progressPercentage, setProgress] = useState(40);

  const [placeholder, setPlaceholder] = useState('Start Writing...');

  const handleClick = () => {
    setPlaceholder('');
  };

  return (
    <div>
      <Navbar/>
      <form className="container-main-sd">
        <div className='container-sd'>
          
          <div className='container-pb-full'>
            <div className='container-pb'>
              
              
              <div className='container-sd-main'>
                {/*  */}
                <ProgressBar progress={progressPercentage}/>
                <div className="sd-main">
                  <h1>Sentence Dictation</h1>
                  <div className="sd-middle">
                    <AiOutlineSound size={28} color='blue'/>
                    <AudioPlayer
                      src={audio}
                      onPlay={e => console.log("onPlay")}
                    />
                    
                  </div>
                  <div className='sd-bottom'>
                      
                      <textarea name="" id="" cols="50" rows="6" maxLength={400} placeholder={placeholder} onClick={handleClick}></textarea>
                    </div>
              </div>
              </div>
              
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

export default SentenceDictation
