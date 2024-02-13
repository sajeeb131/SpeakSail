import React from 'react'
import Navbar from '../../../components/teacherNav'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className='page-container'>
      <div className="navbar-container">
        <Navbar/>
      </div>
      <div className="content-beside-navbar">
        <div className='top'>
          <input type="text" className="search-field" placeholder="Search..." />
        </div>
        <div className='middle'>
          <div className='middle-left'>
            
          </div>
          <div className='middle-right'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard