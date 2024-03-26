import React from 'react'
import { useState } from 'react'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import Navbar from '../../components/Navbar'
import './PictureDescription.css'
import image from "../../assets/images/PD-Family_stress.png"
import Footer from '../../components/Footer'


const PictureDescription = () => {

  const [progressPercentage, setProgress] = useState(40); 
  const [placeholder, setPlaceholder] = useState('Start Writing...');
  const handleClick = () => {
    setPlaceholder('');
  };

  const images = [
 
  ]

  return (
    <div>
        <Navbar/>
        
            <form className='container-pd'> 
            <div className='pd-main'>
            <ProgressBar progress={progressPercentage}/>
                <div className="pd-top">
                    <h1>Picture Description</h1>
                    <div className="pd-top-image">
                    <img src={image} alt="" />
                    </div>

                </div>
                <div className="pd-middle">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Start Writing...'></textarea>
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
