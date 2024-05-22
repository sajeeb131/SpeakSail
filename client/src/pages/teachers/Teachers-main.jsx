import React, { useState } from 'react'
import Navbar from '../../components/teacherNav'
import './teachersMain.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import UploadMain from './upload/UploadMain'

const MainPage = () => {
  const {type} = useParams()
  return (
    <div className='page-container'>
      
      <Navbar/>
      
      <div className="content-beside-navbar">
        
        {type == 'dashboard' && <Dashboard />}
        {type == 'upload' && <UploadMain submitType = {'uploadSD'}/>}
      </div>
    </div>
  )
}

export default MainPage