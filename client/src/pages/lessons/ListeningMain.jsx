import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/Dictionary-pana 1.png'
import image2 from '../../assets/images/cuate.png'

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
        <div className='listeningMain-header'> <h1>Listening Lessons</h1></div>
        <div className="listeningMain-section"> 
            <div className='listeningMain-section-half' onClick={()=>handleLinkClick('Sentence Dictation')}>
                <div className="listeningMain-section-half-left">
                    <h2>Sentence Dictation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image1} alt="" width="120px"/>
                </div>
                
            </div>
            
            <div className='listeningMain-section-half' onClick={()=>handleLinkClick('Question/Answer')}>
                <div className="listeningMain-section-half-left">
                    <h2>Question and Answer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
