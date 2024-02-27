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
const SentenceDictation = () => {
  const [progress, setProgress] = useState(30);
  const progressStyle = {
    width: `${progress}%`
  };
  
  const incrementProgress = () => {
    setProgress(progress + 0);
  };

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
              
              <Link><MdClose size={28}/></Link>
              <div className='container-sd-main'>
                <div className='container-pb-main'>
                  <div className='container-pb-line'style={progressStyle}></div>
                </div>
                <div className="sd-main">
                  <h1>Sentence Dictation</h1>
                  <div className="sd-middle">
                    <AiOutlineSound size={28} color='blue'/>
                    <AudioPlayer
                      
                      src={audio}
                      onPlay={e => console.log("onPlay")}
                      // other props here
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
