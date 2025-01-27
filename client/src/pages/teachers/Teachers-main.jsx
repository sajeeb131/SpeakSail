import React, { useState } from 'react'
import './teachersMain.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import UploadMain from './upload/UploadMain'
import Evaluation from './evaluation/Evaluation'


const MainPage = () => {
  const {type} = useParams()
  return (
    <div className='page-container'>
      
      
      <div className="content-beside-navbar">
        
        {type == 'dashboard' && <Dashboard />}
        {type == 'upload' && <UploadMain submitType = {'uploadSD'}/>}
        {type == 'evaluation' && <Evaluation />}
      </div>
    </div>
  )
}

export default MainPage