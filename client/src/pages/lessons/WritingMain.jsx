import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/pana.png'
import image2 from '../../assets/images/rafiki.png'

const ListeningMain = () => {
  const navigate = useNavigate();
  const handleLinkClick = (lessonType) => {
    console.log(lessonType)
    navigate(`/lessons-table/${lessonType}`); 
  };
  return (
    <div>
      <Navbar/>
      <div className='container-listeningMain'>
        <div className='listeningMain-header'> <h1>Writing Lessons</h1></div>
        <div className="listeningMain-section"> 
            
            
            <div className='listeningMain-section-half' onClick={()=>handleLinkClick('picturedescription')}>
                <div className="listeningMain-section-half-left">
                    <h2>Picture Description</h2>
                    <p>An image will be given and you will have to write a short 
description of the picture.</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image2} alt="" width="120px"/>
                </div>
                    
            </div>
            <div className='listeningMain-section-half  lesson-unavailable' to="/503">
                <div className="listeningMain-section-half-left">
                    <h2>Creative Writing</h2>
                    <p>Not available yet. Coming soon!</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image1} alt="" width="120px"/>
                </div>
                
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ListeningMain
