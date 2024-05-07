import React from 'react'
import { useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AiOutlineSound } from "react-icons/ai";
import './ListeningStyle.css'
import './AudioPlayer.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { useParams } from 'react-router-dom';



const SentenceDictation = (lessonType, lessonNumber) => {
  
  const [progressPercentage, setProgress] = useState(40);
  lessonNumber = useParams().lessonNumber
  const [lesson, setLesson] = useState(null);
  const [placeholder, setPlaceholder] = useState('Start Writing...');
  const [a, setAudio] = useState(null)
  const handleClick = () => {
    setPlaceholder('');
  };
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/listening/sentence-dictation/${lessonNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        setLesson(data);
        setAudio(data)
        console.log(a)

      } catch (error) {
        console.error('Error fetching lesson:', error);
      }
    };

    fetchLesson();
  }, []);

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
                      
                      src={a}
                      
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
