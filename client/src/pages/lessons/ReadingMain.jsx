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
        <div className='listeningMain-header'> <h1>Reading Lessons</h1></div>
        <div className="listeningMain-section"> 
            <div className='listeningMain-section-half' onClick={()=>handleLinkClick('comprehension')}>
                <div className="listeningMain-section-half-left">
                    <h2>Comprehension</h2>
                    <p>An passage will be given and you will have to select the 
answers..</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image1} alt="" width="120px"/>
                </div>
                
            </div>
            
            <div className='listeningMain-section-half lesson-unavailable' >
                <div className="listeningMain-section-half-left">
                    <h2>Story boarding</h2>
                    <p>Not available yet. Coming soon!</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image2} alt="" width="120px"/>
                </div>
                    
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ListeningMain
