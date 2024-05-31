import React from 'react'
import { FiFrown } from "react-icons/fi";
import './status.css'
import { Link, useNavigate } from 'react-router-dom';

const Status403 = () => {
  const user_type = localStorage.getItem('user_type')
  const navigate = useNavigate()
  const handleGoBack = () =>{
    if(user_type === 'student'){
      navigate('/home')
    }
    else{
      navigate('/teachers/dashboard')
    }
    
  }
  return (
    
    <div className='status-403'>
        <div className='status-403-main'>
            <FiFrown size={80} color='red'/>
            <h1>Access Denied</h1>
            <span>Sorry, you don't have access to this page!</span>
            <span>Error Status: 403</span>
            <button className='status-link' onClick={handleGoBack}>Go Back</button>
        </div>
    </div>
    
    
  )
}

export default Status403
