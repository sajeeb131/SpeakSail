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
import { useNavigate, useParams } from 'react-router-dom';
import SubmissionPopup from '../../components/pop-up/submissionPopup';

import { calculateProgress } from '../../components/progress-bar/CalculateProgress';


const SentenceDictation = (lessonType, lessonNumber) => {
  const userID = localStorage.getItem('user');
  const navigate = useNavigate()
  const [progressPercentage, setProgress] = useState(null);
  lessonNumber = useParams().lessonNumber
  const [lesson, setLesson] = useState(null);
  const [placeholder, setPlaceholder] = useState('Start Writing...');
  const [a, setAudio] = useState(null)
  const studentID = localStorage.getItem('user');
  const studentName = localStorage.getItem('name');
  const [answers, setAnswer] = useState(null)
  const [popUp, setPopup] = useState(false);



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

        const progress = await calculateProgress(userID, 'listening','sentence-dictation', 'sentence_dictation');
        setProgress(progress);

      } catch (error) {
        console.error('Error fetching lesson:', error);
      }
    };

    fetchLesson();
  }, []);


  //submit code
  const handleSubmit = async() => {
    try{
      console.log(lessonNumber, studentID, answers)
      const response = await fetch('http://localhost:4000/lessons/listening/sentence-dictation/answer',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({lessonNumber, studentID, studentName, answers})
      })


      
      if (!response.ok) {
        throw new Error('Failed to submit answers');
      }  
      setPopup(true);
 
      console.log('Answers submitted successfully');

    }catch(error){
      console.error('Error submitting answer: ', error)
    }
  }

  const handleSkipButton = ()=>{
    navigate(-1)
  }

  if (!lesson ||  progressPercentage === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar/>
      <div className="container-main-sd">
        <div className='container-sd'>
          
          <div className='container-pb-full'>
            <div className='container-pb'>    
              <div className='container-sd-main'>
                {/*  */}
                {console.log(progressPercentage)}
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
                      <textarea className='area' name="" id="" cols="50" rows="6" maxLength={400} placeholder={placeholder} onClick={handleClick} onChange={(e=> {setAnswer(e.target.value); console.log(answers)})}></textarea>
                  </div>
              </div>
              </div>
              
            </div>
          </div>
          
          

        </div>
        <hr className="sd-horizontal-line"/>
        <div className='container-sd-button'>
          <button className='sd-button1' onClick={handleSkipButton}>Can't listen now</button>
          <button className='sd-button2' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <SubmissionPopup showPopup={popUp} onClose = {()=>setPopup(false)}/>
      <Footer/>
    </div>
  )
}

export default SentenceDictation
