import React, { useState } from 'react';
import './ProfilePage.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profilePic from "../../assets/images/student.jpg"
import uploadIcon from "../../assets/images/uploadIcon.png"
import listeningBadge from "../../assets/images/listening.png"
import speakingBadge from "../../assets/images/speaking.jpg"
import writingBadge from "../../assets/images/writing.png"
import readingBadge from "../../assets/images/reading.jpg"

const ProfilePage = () => {
    const student = {
        name: 'Ralph Lauren',
        id: '0123143',
        school: 'South Park Elementary',
        class: '3',
        section: 'A',
        stats: {
          sentenceDictations: 6,
          questionsAndAnswers: 2,
          poems: 5,
          storytelling: 2,
          digitalStoryboarding: 2,
          pictureDescription: 6,
          chainStory: 2,
        },
      };
      const [userphoto, ProfilePic] = useState(profilePic);
      const [upload, setBadge4] = useState(uploadIcon);
      const [badgelistening, setProfilePic] = useState(listeningBadge);
      const [badgespeaking, setBadge1] = useState(speakingBadge);
      const [badgewriting, setBadge2] = useState(writingBadge);
      const [badgereading, setBadge3] = useState(readingBadge);

  return (
    <div className="container-profilepage">
        <Navbar></Navbar>
        <div className="container-profilepage-user">
            <div className="userdetails-main">

                <div className="userdetails">
                    <h1 className='userdetails-text'>{student.name}</h1>
                    <h4 className='userdetails-text'>{student.id}</h4>
                    <h2 className='userdetails-text'>{student.school}</h2>
                    <h3 className='userdetails-text'> Class: {student.class}</h3>
                    <h3 className='userdetails-text'>Section: {student.section}</h3>
                </div>
                <div className="userphoto">
                    <img className='userphoto-image' src={userphoto} alt=""/>
                </div>
                <div className="photoUploadButton">
                    <a href=""><img className='userphoto-uploadImage' src={upload} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="container-profilepage-achievements">
            <div className="achievements-firstAchievement">
                <img className='achievements-image' src={badgelistening} alt="" />
            </div>
            <div className="achievements-secondAchievement">
                <img className='achievements-image' src={badgespeaking} alt="" />
            </div>
            <div className="achievements-thirdAchievement">
                <img className='achievements-image' src={badgewriting} alt="" />
            </div>
            <div className="achievements-fourthAchievement">
            <img className='achievements-image' src={badgereading} alt="" />
            </div>
        </div>
        <div className="container-profilepage-stats">
            <div className="profilepage-stats-achievements">
                <div className="stats-header">
                    <h1 className='stats-headerText'>Stats</h1>
                </div>
                <div className="lessonsCompletion-stats">
                    <h3 className='stats-text'>Sentence Dictations:</h3>
                    <h3 className='stats-text'>Question and Answer:</h3>
                    <h3 className='stats-text'>Poems:</h3>
                    <h3 className='stats-text'>Storytelling:</h3>
                    <h3 className='stats-text'>Digital Story boarding:</h3>
                    <h3 className='stats-text'>Picture Description:</h3>
                    <h3 className='stats-text'>Chain Story:</h3>
                </div>
            </div>
            <div className="profilepage-stats-achievements">
                <div className="achievements-header">
                    <h1 className='stats-headerText'>Achievements</h1>
                </div>
                <div className="profilepage-achievements">
                    
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default ProfilePage
