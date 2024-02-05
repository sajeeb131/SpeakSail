import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InitialNav from '../../components/InitialNav';
import Footer from '../../components/Footer';
import image from '../../assets/images/header image.png'; 
import image3 from '../../assets/images/teacher-avatar.png'; 
import "./LandingPage.css"
import icon1 from "../../assets/icons/objective1.png"
import icon2 from "../../assets/icons/objective2.png"
import icon3 from "../../assets/icons/objective3.png"
import icon4 from "../../assets/icons/objective4.png"
import image2 from '../../assets/images/Settings-bro 1.png'
import icon5 from "../../assets/icons/mdi_tick-circle.png"
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
            
            <img src={icon4} alt='' width={40} height={40}/>
            
            <div className=''>
              <p>To cater the needs of students
                who require further input about learning beyond classroom.</p>
            </div>
          </div>
        </div>
      </div>
      {/* part: what we offer */}
      <div className='container-offer'>
      <div className='container-offer-heading'><h1>What <span style={{color: '#FABC2A'}}>We Offer</span></h1></div>
        <div className='container-offer-half'>
          
          <div className='container-offer-left'>
            <img src={image2} alt='' width={480} height={340}/>
          </div>
          <div className='container-offer-right'>
              <div className='container-offer-right-point'>
                <img src={icon5} alt='' width={30} height={30}/>
                <div>
                  <p style={{fontWeight:'600'}}>Customized lessons in all four language skills </p>
                  <p>Reading, Writing, Listening and Speaking.</p>
                </div>
              </div>
              <div className='container-offer-right-point'>
                <img src={icon5} alt='' width={30} height={30}/>
                <div>
                  <p style={{fontWeight:'600'}}>Daily Missions </p>
                  <p>Providing daily missions keep students motivated and learn more..</p>
                </div>
              </div>
              <div className='container-offer-right-point'>
                <img src={icon5} alt='' width={30} height={30}/>
                <div>
                  <p style={{fontWeight:'600'}}>Practice exercises </p>
                  <p>Reading, Writing, Listening and Speaking..</p>
                </div>
              </div>
              <div className='container-offer-right-point'>
                <img src={icon5} alt='' width={30} height={30}/>
                <div>
                  <p style={{fontWeight:'600'}}>Vocab Treasure </p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      {/* Tools for teachers and learners */}
      <div className='container-tools'>
        <div className='container-tools-left'>
            <div>
              <h1><span style={{color:'#FABC2A'}}>Tools</span> for Teachers</h1>
              <h1>and Learners</h1>
            </div>
            <div>
              <p>Class has a dynamic set of teaching tools built to
                be deployed and used during class. Teachers can
                handout assignments in real-time for students to
                complete and submit their work.</p>
            </div>
        </div>
        <div className='container-tools-right'>
          <img src={image3} alt='' width={600} height={400}/>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
