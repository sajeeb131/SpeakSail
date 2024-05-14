import React, { useState } from 'react'
import Navbar from '../../../components/teacherNav'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import avatar1 from '../../../assets/images/PFP.png'
import avatar2 from '../../../assets/images/teacherAvatar.png'
import { DUMMY_POST } from './data'
import { DUMMY_POST1 } from './data2'
import { DUMMY_POST2 } from './data3'


const Dashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalClasses, setTotalClasses] = useState(5);
  const [studentImg, setStudentImg] = useState(avatar1);
  const [teachertImg, setTeacherImg] = useState(avatar2);
  const [teacherName, setTeacherName] = useState('Jane Doe');
  const [teacherId, setTeacherId] = useState('0432');
  const [topStudents, setTopStudents] = useState(DUMMY_POST);
  const [recents, setRecents] = useState(DUMMY_POST1);
  const [deadlines, setDeadlines] = useState(DUMMY_POST2);
  return (
    <div className='page-container'>
      
        <Navbar/>
      
      <div className="content-beside-navbar">
        
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
            <h2 id='headers2'>Top performing students</h2>
            <div className='mid'>
              {topStudents.slice(0,4).map((Item, key)=>{
                return(
                  <div className='student-info'>
                      <div className='img-block'>
                        <img src={studentImg}></img>
                      </div>
                      <div className='info-block'>
                        <h2>Name: {Item.name}</h2>
                        <h3>Class: {Item.class}</h3>
                        <h3>{Item.completed}%</h3>
                      </div>
                  </div>
                )
              })}
              <Link to='/teachers/students-list'>See more</Link>
            </div>
            <h2 id='headers2'>Recently accessed classes</h2>
            <div className='bot'>
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
                <div className='profile-box'>
                    <img src={teachertImg} alt='Teacher Avatar'></img>
                    <h2>{teacherName}</h2>
                    <h3>Profile ID: {teacherId}</h3>
                    <Link>Edit Profile</Link>
                </div>
                <div className='deadline-box'>
                    <h1>Upcoming Deadlines</h1>
                    {deadlines.slice(0,3).map((item, key)=>{
                      return(
                        <div className='deadline-info'>
                            <h2>{item.lessonName}</h2>
                            <h3>Assigned to class: {item.class}</h3>
                            <p>Deadline: {item.deadline}</p>
                            <button>Remind Class</button>
                        </div>
                      )
                    })}
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard