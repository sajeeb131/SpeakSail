import React, { useEffect, useState } from 'react'
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
  const [recents, setRecents] = useState(DUMMY_POST1);
  const [deadlines, setDeadlines] = useState(DUMMY_POST2);
  
  const [teacher, setTeacher] = useState()
  const [students, setStudents] = useState([])
  const userID = localStorage.getItem('user')
  const [totalLessons, setTotalLessons] = useState()
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response = await fetch(`http://localhost:4000/teacher/${userID}`)
        const response2 = await fetch(`http://localhost:4000/student/`)
        const response3 = await fetch(`http://localhost:4000/home/`)

        if(!response.ok && !response2.ok && !response3.ok){
          throw new Error('Data can not be fetched!')
        }
        const userData = await response.json();
        const userData2 = await response2.json();
        const userData3 = await response3.json();

        setTeacher(userData)
        setStudents(userData2)
        console.log(students)
        setTotalLessons(userData3.listeningSEN + userData3.listeningQA + userData3.speaking + userData3.reading + userData3.writing)


      }catch(error){
        console.log( error.message)
      }
    }
    fetchData();
  },[userID])

 // Calculate total lessons completed for each student
 const calculateTotalLessons = (student) => {
    return (
      student.listening +
      student.speaking +
      student.writing +
      student.reading 
    );
  };
  
  // Sort students by total lessons completed
  const sortedStudents = [...students].sort(
    (a, b) => calculateTotalLessons(b) - calculateTotalLessons(a)
  );
  const topStudents = sortedStudents.slice(0, 4);

  {!teacher && !students && !topStudents && <div>...Loading</div>}


  return (
        <div className='middle'>
          <div className='middle-left'>
            <div className='upper'>
              <div className='stats-banner' id='ban1'>
                <h2>Total Students</h2>
                <h1>{students.length}</h1>
              </div>

              <div className='stats-banner' id='ban2'>
                <h2>Total Classes</h2>
                <h1>{totalClasses}</h1>
              </div>

              <div className='stats-banner' id='ban3'>
                <h2>Total Lessons</h2>
                <h1>{totalLessons}</h1>
              </div>
            </div>
            <div className='top-students'>
            <h2 id='headers2'>Top Performing Students</h2>
            <div className='mid'>
              {topStudents.slice(0,4).map((student, key)=>{
                return(
                  <div className='student-info'>
                      <div className='img-block'>
                        <img src={studentImg}></img>
                      </div>
                      <div className='info-block'>
                        <div className='info-block-sub'>
                          <h2>{student.fullName}</h2>
                          <h3>Class: {student.class}</h3>
                        </div>
                        <h3>{Math.ceil((calculateTotalLessons(student) / totalLessons) * 100)}%</h3>
                      </div>
                  </div>
                )
              })}
              
            </div>

            </div>
            <div className='accessed-class'>
            <h2 id='headers2'>Recently accessed classes</h2>
            <div className='bot'>
                {recents.slice(0,2).map((item, key)=>{
                  return(
                    <div className='class-info'>
                        <div className='class-box'><h1>Class: {item.class}</h1></div>
                        <div className='class-box'><h3>Total Students: {item.topStudents}</h3></div>
                        <div className='class-box'><h3>Last assigned task: {item.lastUpload}</h3></div>
                    </div>
                  )
                  })}
              </div>
            </div>
            </div>
            
          
          <div className='middle-right'>
                  {teacher && 
                    <div className='profile-box'>
                      <img src={teachertImg} alt='Teacher Avatar'></img>
                      <h2>{teacher.fullName}</h2>
                      <h3>{teacher.userID}</h3>
                      
                      <div className='total-classes-taught'>
                        <h3>{teacher.takenClasses} </h3>
                        <span>Total Classes Taught</span>
                      </div>
                      <div className='profile-box-profile-button'>
                        <Link>Edit Profile</Link>
                      </div>
                  </div>
                  }
                
                {/* <div className='deadline-box'>
                    <h1>Upcoming Deadlines</h1>
                    {deadlines.slice(0,3).map((item, key)=>{
                      return(
                        <div className='deadline-info'>
                          <div className='deadline-info-sub'>
                            <h2>{item.lessonName}</h2>
                            <h3>Assigned to class: {item.class}</h3>
                            <p>Deadline: {item.deadline}</p>
                          </div>
                            <button>Remind Class</button>
                        </div>
                      )
                    })}
                </div> */}
          </div>
        </div>
      
  )
}

export default Dashboard