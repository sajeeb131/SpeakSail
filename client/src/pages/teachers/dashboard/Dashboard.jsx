import React, { useState } from 'react'
import Navbar from '../../../components/teacherNav'
import './Dashboard.css'
import { DUMMY_POST } from './data'
import { DUMMY_POST1 } from './data2'


const Dashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalClasses, setTotalClasses] = useState(5);
  const [topStudents, setTopStudents] = useState(DUMMY_POST)
  const [recents, setRecents] = useState(DUMMY_POST1)
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
            <div className='upper'>
              <div className='stats-banner' id='ban1'>
                <h2>Total Students</h2>
                <h1>{totalStudents}</h1>
              </div>

              <div className='stats-banner' id='ban2'>
                <h2>Total Classes</h2>
                <h1>{totalClasses}</h1>
              </div>

              <div className='stats-banner' id='ban3'>
                <h2>Total Students</h2>
                <h1>{totalStudents}</h1>
              </div>
            </div>

            <div className='mid'>
              <h2>Top performing students</h2>
              {topStudents.map((Item, key)=>{
                return(
                  <div className='student-info'>
                      <div className="student-box">Name: {Item.name}</div>
                      <div className="student-box">Class: {Item.class}</div>
                      <div className="student-box">{Item.completed}%</div>
                  </div>
                )
              })}
            </div>

            <div className='bot'>
                <h2>Recently accessed classes</h2>
                {recents.slice(0,2).map((item, key)=>{
                  return(
                    <div className='class-info'>
                        <div className='class-box'><h1>Class: {item.class}</h1></div>
                        <div className='class-box'><h3>Total Students: {item.topStudents}</h3></div>
                        <div className='class-box'><h3>Last Upload: {item.lastUpload}</h3></div>
                    </div>
                  )
                })}
            </div>
          </div>

          <div className='middle-right'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard