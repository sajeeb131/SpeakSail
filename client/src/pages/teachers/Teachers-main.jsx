import React, { useState } from 'react'
// import Navbar from '../../components/TeacherNav'
import './teachersMain.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import UploadMain from './upload/UploadMain'
import Evaluation from './evaluation/Evaluation'


const MainPage = () => {
  const {type} = useParams()
  return (
    <div className='page-container'>
      
      {/* <Navbar/> */}
      
      <div className="content-beside-navbar">
        
        {type == 'dashboard' && <Dashboard />}
        {type == 'upload' && <UploadMain submitType = {'uploadSD'}/>}
        {type == 'evaluation' && <Evaluation />}
      </div>
    </div>
  )
}

export default MainPage