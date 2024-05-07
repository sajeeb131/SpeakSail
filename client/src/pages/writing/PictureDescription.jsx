import React from 'react'
import { useState, useEffect } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
import './PictureDescription.css'
import image from "../../assets/images/PD-Family_stress.png"
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'


const PictureDescription = (progress) => {

  const {lessonNumber} = useParams();
  const [progressPercentage, setProgress] = useState(40); 
  const [lesson, setLesson] = useState(null);


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
                    <textarea name="" id="" cols="30" rows="8" maxLength="400" placeholder='Start Writing...'></textarea>
                    <div className="middle-submit">    
                    <button className='btn-submit' type="submit">Submit</button>
                    </div>
                </div>
            
            </div>
          
            </form>
        <Footer/>
        </div>
    
  )
}

export default PictureDescription
