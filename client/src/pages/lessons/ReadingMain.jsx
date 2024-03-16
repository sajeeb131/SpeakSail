import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/pana.png'
import image2 from '../../assets/images/rafiki.png'

const ListeningMain = () => {
  return (
    <div>
      <Navbar/>
      <div className='container-listeningMain'>
        <div className='listeningMain-header'> <h1>Reading Lessons</h1></div>
        <div className="listeningMain-section"> 
            <Link className='listeningMain-section-half' to="/lessons/reading/Comprehension">
                <div className="listeningMain-section-half-left">
                    <h2>Comprehension</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image1} alt="" width="120px"/>
                </div>
                
            </Link>
            
            <Link className='listeningMain-section-half' to='/503'>
                <div className="listeningMain-section-half-left">
                    <h2>Story boarding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="listeningMain-section-half-right">
                    <img src={image2} alt="" width="120px"/>
                </div>
                    
            </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ListeningMain
