import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InitialNav from '../../components/InitialNav';
import Footer from '../../components/Footer';
import image from '../../assets/images/header image.png'; 
import "./LandingPage.css"
import icon1 from "../../assets/icons/objective1.png"
import icon2 from "../../assets/icons/objective2.png"
import icon3 from "../../assets/icons/objective3.png"
import icon4 from "../../assets/icons/objective4.png"
const LandingPage = () => {
  return (
    <div>
      <InitialNav />
      {/* get started part */}
      <div className='container-getStarted'>
        <div className='container-getStarted-half'>
          <div className='container-getStarted-half-heading'>
            <h1>Start <span style={{ color: '#FABC2A' }}>Learning</span></h1>
            <h1>From The Best</h1>
            <h1>Paltform</h1>
          </div>
          <div className='container-getStarted-half-des'><p>Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</p></div>
          <div className='container-getStarted-half-button'><Link>Get Started</Link></div>
        </div>
        <div className='container-getStarted-half'>
          <img src={image} alt='' width={600} height={400}/>
        </div>
      </div>
      {/* objective part */}
      <div className='container-objective'>
        <div className='container-objective-heading'><h1>Our <span style={{ color: '#FABC2A' }}>Objective</span></h1></div>
        <div className='container-objective-points'>
          <div className='container-objective-points-indv'>
            <img src={icon1} alt='' width={40} height={40}/>
            <div className=''>
              <p>To improve the oral English communication of Bangladeshi students</p>
            </div>
          </div>
          
          <div className='container-objective-points-indv'>
            <img src={icon2} alt='' width={40} height={40}/>
            <div className=''>
              <p>To enhance English language 
                learning, focusing on 
              listening and speaking skills</p>
            </div>
          </div>
          <div className='container-objective-points-indv'>
            
            <img src={icon3} alt='' width={40} height={40}/>
            <div className=''>
              <p>To assist students to prepare for real-life situations where English communication is inevitable in this era of globalisation.</p>
            </div>
          </div>
          <div className='container-objective-points-indv'>
            
            <img src={icon4} alt='' width={35} height={40}/>
            
            <div className=''>
              <p>To cater the needs of students
                who require further input about learning beyond classroom.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default LandingPage;
