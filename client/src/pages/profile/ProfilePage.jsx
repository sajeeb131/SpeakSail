import React, { useEffect, useState } from 'react';
import './ProfilePage.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profilePic from "../../assets/images/student.jpg"
import uploadIcon from "../../assets/images/uploadIcon.png"
import listeningBadge from "../../assets/images/listening.png"
import speakingBadge from "../../assets/images/speaking.jpg"
import writingBadge from "../../assets/images/writing.png"
import readingBadge from "../../assets/images/reading.jpg"
import badge1 from "../../assets/images/badge1.png"
import badge2 from "../../assets/images/badge2.png"
import badge3 from "../../assets/images/badge3.png"
import badge4 from "../../assets/images/badge4.png"



const ProfilePage = () => {

      const [userphoto, ProfilePic] = useState(profilePic);
      const [upload, setBadge4] = useState(uploadIcon);
      const [badgelistening, setBadgeListening] = useState(null);
      const [badgespeaking, setBadgeSpeaking] = useState(null);
      const [badgewriting, setBadgeWriting] = useState(null);
      const [badgereading, setBadgeReading] = useState(null);

      const userID = localStorage.getItem('user');

      const [SD_total, setSDlength] = useState();
      const [QA_total, setQAlength] = useState();
      const [ST_total, setSTlength] = useState();
      const [PD_total, setPDlength] = useState();
      const [CM_total, setCMLength] = useState();

      const [user, setUser] = useState([]);
      const [SD, setSD] = useState('')
      

      useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch(`http://localhost:4000/profile/${userID}`);
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await userResponse.json();
                setUser(userData);
                
               
                const sentence_dictationUrl = [
                    'http://localhost:4000/lessons/listening/sentence-dictation'
                    
                ];
                const listening_qaUrl = [
                    'http://localhost:4000/lessons/listening/qa'
                ];
                const storytellingUrl = [
                    'http://localhost:4000/lessons/speaking/storytelling'
                ];
                const picturedescriptionUrls = [
                    'http://localhost:4000/lessons/writing/picturedescription'
                ];
                const comprehensionUrls = [
                    'http://localhost:4000/lessons/reading/comprehension'
                ];
                

                const responseSD = await fetch(sentence_dictationUrl);
                const SDdata = await responseSD.json();
                setSDlength(SDdata.lessons.length);

                const responseQA = await fetch(listening_qaUrl);
                const QAdata = await responseQA.json();
                setQAlength(QAdata.lessons.length);

                const responseST = await fetch(storytellingUrl);
                const STdata = await responseST.json();
                setSTlength(STdata.lessons.length);

                const responsePD = await fetch(picturedescriptionUrls);
                const PDdata = await responsePD.json();
                setPDlength(PDdata.lessons.length);

                const responseCM = await fetch(comprehensionUrls);
                const CMdata = await responseCM.json();
                setCMLength(CMdata.lessons.length);

                // console.log(SD)
                // console.log('See')
                
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }
   
                } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    fetchData();
    }, [userID]);

    useEffect(()=> {
        if(user.listening>=0){
            setBadgeListening(listeningBadge)
        }
        if(user.reading>=0){
            setBadgeSpeaking(speakingBadge)
        }
        if(user.writing>=0){
            setBadgeWriting(writingBadge)
        }
        if(user.reading>=0){
            setBadgeReading(readingBadge)
        }
        
    })

  return (
    <div className="container-profilepage">
        <Navbar></Navbar>
        <div className="container-profilepage-user">
            <div className="userdetails-main">

                <div className="userdetails">
                    <h1 className='userdetails-text'>{user.fullName}</h1>
                    <h4 className='userdetails-text'>{user.userID}</h4>
                    <h2 className='userdetails-text'>{user.school}</h2>
                    <h3 className='userdetails-text'> Class: {user.class}</h3>
                    <h3 className='userdetails-text'>Section: {user.section}</h3>
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
            {badgelistening && <div className="achievements-firstAchievement">
                <img className='achievements-image' src={badgelistening} alt="" />
            </div>}
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
                    <div className="lessionsCompletion-stats-lessons">
                        <h3 className='stats-text'>Sentence Dictations:</h3>
                        <h3 className='stats-text'>Question and Answer:</h3>
                        <h3 className='stats-text'>Storytelling:</h3>
                        <h3 className='stats-text'>Picture Description:</h3>
                        <h3 className='stats-text'>Comprehension:</h3>

                        {/* <h3 className='stats-text'>Poems:</h3> */}
                        {/* <h3 className='stats-text'>Digital Story boarding:</h3> */}
                        {/* <h3 className='stats-text'>Chain Story:</h3> */}

                    </div>
                    <div className="lessonsCompletion-num">
                        <h3 className='stats-text'>{user.sentence_dictation}/{SD_total}</h3>
                        <h3 className='stats-text'>{user.question_answer}/{QA_total}</h3>
                        <h3 className='stats-text'>{user.storytelling}/{ST_total}</h3>
                        <h3 className='stats-text'>{user.picture_description}/{PD_total}</h3>
                        <h3 className='stats-text'>{user.comprehension}/{CM_total}</h3>

                        {/* <h3 className='stats-text'>6/10</h3>
                        <h3 className='stats-text'>2/6</h3> */}
                    </div>
                </div>
            </div>
            <div className="profilepage-stats-achievements">
                <div className="achievements-header">
                    <h1 className='stats-headerText'>Achievements</h1>
                </div>
                <div className="profilepage-achievements">
                    <img className='stats-achievements-image' src={badge1} alt="" />
                    <img className='stats-achievements-image' src={badge2} alt="" />
                    <img className='stats-achievements-image' src={badge3} alt="" />
                    <img className='stats-achievements-image' src={badge4} alt="" />
                    
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default ProfilePage
