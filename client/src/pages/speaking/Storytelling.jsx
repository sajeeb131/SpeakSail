import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { FaMicrophoneAlt } from "react-icons/fa";
import "./StorytellingStyle.css"
import Recorder from '../../components/recorder/Recorder'
import SubmissionPopup from '../../components/pop-up/submissionPopup';


const Storytelling = (progress) => {
    const {lessonNumber} = useParams()
    const [progressPercentage, setProgress] = useState(40); 
    const [lesson, setLesson] = useState(null)
    const [popUp, setPopup] = useState(false);


    //fetch code
    useEffect(() => {
        const fetchLesson = async () => {
          try {
            console.log(lessonNumber);
            const response = await fetch(`http://localhost:4000/lessons/speaking/storytelling/${lessonNumber}`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setLesson(data);
            console.log(lesson);
          } catch (error) {
            console.error('Error fetching lesson:', error);
          }
        };
        fetchLesson();
    }, [lessonNumber]);




    // submit code
    const [audioBlob, setAudioBlob] = useState(null);

    const handleAudioSubmit = async () => {
      console.log('here')
      console.log(audioBlob)
      if (true) {
          try {
                console.log(audioBlob)
              const formData = new FormData();
              formData.append('file', audioBlob);
              formData.append('lessonType', 'Storytelling');
              formData.append('lessonNumber', lessonNumber);
              formData.append('story', lesson.story);
              formData.append('studentID', localStorage.getItem('user'));
              console.log(formData)
              const response = await fetch('http://localhost:4000/lessons/speaking/storytelling/answer', {
                  method: 'POST',
                  body: formData,
              });

              if (!response.ok) {
                  throw new Error('Failed to submit audio');
              }

              setPopup(true);

              // Handle success response
              console.log('Audio submitted successfully');
          } catch (error) {
              console.error('Error submitting audio:', error);
          }
      } else {
          console.warn('Required fields are missing');
      }
  };



    // Conditional rendering to handle case when lesson is still null
    if (!lesson || !lesson.story ) {
        return <div>Loading...</div>;
    }



    return (
        <div>
        <Navbar/>
        
            <div className='container-st'> 
            <div className='st-main'>
            <ProgressBar progress={progressPercentage}/>
            <div className="st-top">
                <h1>Storytelling</h1>
                <div className='st-para'>
                    <p className='st-para-p'>{lesson.story} </p>
                </div>
                
                
            </div>
            <Recorder onRecordingStop={(blob) => setAudioBlob(blob)} />
            
            
            </div>
            <hr className="sd-horizontal-line"/>
            <div className='container-sd-button'>
                
                <button className='sd-button1' >Can't listen now</button>
                <button className='sd-button2' onClick={handleAudioSubmit}>Submit</button>
                
            </div>
        </div>
        <SubmissionPopup showPopup={popUp} onClose = {()=>setPopup(false)}/>
        <Footer/>
        </div>
        
    )
}

export default Storytelling
