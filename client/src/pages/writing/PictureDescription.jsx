import React from 'react'
import { useState, useEffect } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
import './PictureDescription.css'
import image from "../../assets/images/PD-Family_stress.png"
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import SubmissionPopup from '../../components/pop-up/submissionPopup'



const PictureDescription = (progress) => {

  const {lessonNumber} = useParams();
  const [progressPercentage, setProgress] = useState(40); 
  const [lesson, setLesson] = useState(null);
  const [answers, setAnswer] = useState(null);
  const studentID = localStorage.getItem('user')
  const [popUp, setPopup] = useState(false);



  useEffect(() => {
    const fetchLesson = async () => {
      try {
        // console.log(lessonNumber);
        const response = await fetch(`http://localhost:4000/lessons/writing/picturedescription/${lessonNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLesson(data);
        console.log(lesson)
      } catch (error) {
        console.error('Error fetching lesson:', error);
      }
    };

    fetchLesson();
  }, [lessonNumber]);

  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value)
    console.log(answers)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(!answers){
        throw new Error('Answer script is empty!')
      }
      const response = await fetch(`http://localhost:4000/lessons/writing/picturedescription/answer`,{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({lessonNumber, studentID, answers})
      })
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      setPopup(true);

      
    }catch(error){
      console.log('Error creating data: ', error)
    }
  }

  // Conditional rendering to handle case when lesson is still null
  if (!lesson || !lesson.imagePath ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar/>
        
            <form className='container-pd'> 
            <div className='pd-main'>
            <ProgressBar progress={progressPercentage}/>
                <div className="pd-top">
                    <h1>Picture Description</h1>
                    <div className="pd-top-image">
                    <img src={lesson.imagePath} alt="" width='580px' height='402px'/>
                    </div>

                </div>
                <div className="pd-middle">
                    <textarea name="" id="" cols="30" rows="8" maxLength="400" placeholder='Start Writing...' onChange={handleTextAreaChange}></textarea>
                    <div className="middle-submit">    
                    <button className='btn-submit' type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            
            </div>
          
            </form>
            <SubmissionPopup showPopup={popUp} onClose = {()=>setPopup(false)}/>
        <Footer/>
        </div>
    
  )
}

export default PictureDescription
