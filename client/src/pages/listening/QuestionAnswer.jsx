import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AiOutlineSound } from "react-icons/ai";
import audio from '../../assets/audio/sample-6s.mp3'
import './ListeningStyle.css'
import Footer from '../../components/Footer'

const QuestionAnswer = (progress) => {
    const { lessonNumber } = useParams();
    const [progressPercentage, setProgress] = useState(40); 
    const [lesson, setLesson] = useState({ audioFilePath: '', questions: ['', '', ''] });
    const [audio, setAudio] = useState('');
  
    useEffect(() => {
      const fetchLesson = async () => {
        try {
          console.log(lessonNumber);
          const response = await fetch(`http://localhost:4000/lessons/listening/qa/${lessonNumber}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          
          setLesson(data);
          setAudio(data.audioFilePath);
        } catch (error) {
          console.error('Error fetching lesson:', error);
        }
      };
  
      fetchLesson();
    }, [lessonNumber]);
  
    // Conditional rendering to handle case when lesson is still null
    if (!lesson || !lesson.questions || lesson.questions.length !== 3) {
      return <div>Loading...</div>;
    }
    
  
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
                      src={audio}
                      onPlay={e=>console.log("onPlay")}
                  />
                  </div>
              </div>
              <div className="qa-middle">
                  {lesson.questions.map((question, index) => (
                    <div className="qa-middle-q" key={index}>
                      <p>Ques {index + 1}. {question}</p>
                      <textarea name="" id="" cols="50" rows="2" placeholder='Start writing...'></textarea>
                    </div>
                  ))}
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
    );
  }
  

export default QuestionAnswer
