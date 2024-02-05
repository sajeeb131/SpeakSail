import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InitialNav from '../../components/InitialNav';
import Footer from '../../components/Footer';
import image from '../../assets/images/header image.png'; 
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <div>
      <InitialNav />
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
      <Footer />
    </div>
  );
}

export default LandingPage;
