import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './HomePage.css'

import VocabMission from '../../assets/images/VT-Card.png'
import DailyMission from '../../assets/images/DM-CARD.png'

import Report from '../performance-report/Report';

const HomePage = () => {
    const navigate = useNavigate();
    const userID = localStorage.getItem('user');
    const [user, setUser] = useState([]);
    
    const [overallProgress, setOverallProgress] = useState('');
    const progressStyle = {
        width: `${overallProgress}%`
    };

    const [listeningProgress, setListeningProgress] = useState(null);
    const [speakingProgress, setSpeakingProgress] = useState(null);
    const [readingProgress, setReadingProgress] = useState(null);
    const [writingProgress, setWritingProgress] = useState(null);

    const [listeningTotalLessons, setListeningTotalLessons] = useState('')
    const [speakingTotalLessons, setSpeakingTotalLessons] = useState('')
    const [readingTotalLessons, setReadingTotalLessons] = useState('')
    const [writingTotalLessons, setWritingTotalLessons] = useState('')

    const progressStyles = {
        listening: {
            width: `${(listeningProgress/listeningTotalLessons)*100}%`
        },
        speaking: {
            width: `${(speakingProgress/speakingTotalLessons)*100}%`
        },
        reading: {
            width: `${(readingProgress/readingTotalLessons)*100}%`
        },
        writing: {
            width: `${(writingProgress/writingTotalLessons)*100}%`
        }
    };

    const handleDailyMissionClick = (event) =>{
        navigate('/daily-mission')
    }
    const handleVocabTreasureClick = (event) =>{
        navigate('/vocab-treasure')
    }
    
    const clickLessonLink = (lesson)=>{
        navigate(`/lessons/${lesson}`)
    }

    const fetchLessonData = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        const userData = await response.json();
        console.log(userData)
        return response.json();
    };
    
    const calculateTotalLessons = async (urls) => {
        const lessonPromises = urls.map((url) => fetchLessonData(url));
        const lessonsArray = await Promise.all(lessonPromises);
        return lessonsArray.reduce((total, lessonData) => total + lessonData.lessons.length, 0);
    };
    const calcOverall = async () =>{
        const x = Number(listeningProgress) + Number(speakingProgress) + Number(readingProgress) + Number(writingProgress)
        const y = Number(listeningTotalLessons) + Number(speakingTotalLessons) + Number(writingTotalLessons) + Number(readingTotalLessons)
        const result = (x/y)*100
        setOverallProgress(result)
        // console.log(x,y, result)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch(`http://localhost:4000/home/${userID}`);
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await userResponse.json();
                setUser(userData);
                localStorage.setItem('name', userData.fullName)
                setListeningProgress(userData.listening);
                setReadingProgress(userData.reading);
                setWritingProgress(userData.writing);
                setSpeakingProgress(userData.speaking);
                console.log(listeningProgress, readingProgress, speakingProgress, writingProgress)


                //calculate total lessons
                const userResponse2 = await fetch('https://speaksail-client.onrender.com/lessons/listening/sentence-dictation');
                const sd = await userResponse2.json()
                const userResponse3 = await fetch('https://speaksail-client.onrender.com/lessons/listening/qa');
                const qa = await userResponse3.json()
                setListeningTotalLessons(sd.lessons.length+ qa.lessons.length)

                const userResponse4 = await fetch('https://speaksail-client.onrender.com/lessons/reading/comprehension');
                const c = await userResponse4.json()
                setReadingTotalLessons(c.lessons.length)
                
                const userResponse5 = await fetch('https://speaksail-client.onrender.com/lessons/speaking/storytelling');
                const st = await userResponse5.json()
                const userResponse7 = await fetch('https://speaksail-client.onrender.com/lessons/speaking/conversation-exchange');
                const ce = await userResponse7.json()
                setSpeakingTotalLessons(st.lessons.length+ ce.lessons.length)

                const userResponse6 = await fetch('https://speaksail-client.onrender.com/lessons/writing/picturedescription');
                const pd = await userResponse6.json()
                setWritingTotalLessons(pd.lessons.length)
                
                await calcOverall()

                
   
                } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    fetchData();
    }, [userID]);

    useEffect(() => {
        if (
            listeningProgress !== null &&
            speakingProgress !== null &&
            readingProgress !== null &&
            writingProgress !== null &&
            listeningTotalLessons &&
            speakingTotalLessons &&
            readingTotalLessons &&
            writingTotalLessons
        ) {
            const totalProgress = Number(listeningProgress) + Number(speakingProgress) + Number(readingProgress) + Number(writingProgress);
            const totalLessons = Number(listeningTotalLessons) + Number(speakingTotalLessons) + Number(readingTotalLessons) + Number(writingTotalLessons);
            const overall = (totalProgress / totalLessons) * 100;
            setOverallProgress(overall);
        }
    }, [
        listeningProgress,
        speakingProgress,
        readingProgress,
        writingProgress,
        listeningTotalLessons,
        speakingTotalLessons,
        readingTotalLessons,
        writingTotalLessons
    ]);
    
    {!overallProgress && <div>...Loading</div>}

  return (
    <div className='container-homepage'>
        <Navbar/>
        {/* part 1: heading */}
        <div className='container-homepage-header'>
            <h1>Welcome back, <span>{user.fullName}</span></h1>
        </div>
        {/* part 2: progress bar */}
        <div className='container-homepage-progress'>
            <div className='container-homepage-progress-bar'>
                <div>
                    <h1>Your overall progress</h1>
                </div>
                <div className='container-homepage-progress-bar-line'>
                    <div className="progress-bar" style={progressStyle}></div>
                    
                </div>
                <span className='overall-progress-span'>{Math.floor(overallProgress)}%</span>
            </div>
        </div>
        {/* part 3: vocab treasure, daily mission */}
        <div className='container-vb-tr'>
            <div className='halff'>
                <h2>Vocab Treasure</h2>
                <img src={VocabMission} onClick={handleVocabTreasureClick}></img>
            </div>
            <div className='halff'>
                <h2>Daily Mission</h2>
                <img src={DailyMission} onClick={handleDailyMissionClick}></img>
            </div>
        </div>
        
        {/* part 4: lessons */}
        <div className='container-homepage-lessons'>
            <div>
                <h1>Lessons</h1>
            </div>
            <div className='container-homepage-lessons-half'>
                <div className='container-homepage-lessons-indv' id='listening' onClick={()=>clickLessonLink('listening')} >

                    <h2>Listening</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar listening" style={{ ...progressStyles.listening, backgroundColor: '#FABC2A;' }} ></div>
                    </div>
                    <span>{Math.floor((listeningProgress/listeningTotalLessons) * 100)}%</span>

                </div>
                <div className='container-homepage-lessons-indv' id='speaking' onClick={()=>clickLessonLink('speaking')}>
                    <h2>Speaking</h2>
                    <div className='container-homepage-progress-bar-line'>
                        <div className="progress-bar" style={{ ...progressStyles.speaking, backgroundColor: '#52D1DC' }}></div>
                    </div>
                    <span>{Math.floor((speakingProgress/speakingTotalLessons) * 100)}%</span>

                </div>
            </div>
            <div className='container-homepage-lessons-half'>
                <div className='container-homepage-lessons-indv' id='reading' onClick={()=>clickLessonLink('reading')}>
                    <h2>Reading</h2>
                    <div className='container-homepage-progress-bar-line'>
                    <div className="progress-bar" style={{ ...progressStyles.reading, backgroundColor: '#FF5E5B' }}></div>
                    </div>
                    <span>{Math.floor((readingProgress/readingTotalLessons) * 100)}%</span>

                </div>
                <div className='container-homepage-lessons-indv' id='writing' onClick={()=>clickLessonLink('writing')}>
                    <h2>Writing</h2>
                    <div className='container-homepage-progress-bar-line'>
                    <div className="progress-bar" style={{ ...progressStyles.writing, backgroundColor: '#93FF96' }}></div>
                    </div>
                    <span>{Math.floor((writingProgress/writingTotalLessons) * 100)}%</span>
                    
                </div>
            </div>
        </div>
        {/* part 5: materials */}
        <div className='container-homepage-material'>
            <div><h1>Download <span style={{color:"#D67BE0"}}>Materials</span></h1></div>
            <div className='homepage-materials'>
                <div className="homepage-materials-indv" style={{backgroundColor:"#52D1DC"}}>
                <div className='homepage-materials-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 40 41" fill="none">
                    <g clip-path="url(#clip0_40_125)">
                        <path d="M34.678 7.68398C34.5231 7.52913 34.3393 7.4063 34.137 7.32249C33.9347 7.23869 33.7178 7.19556 33.4988 7.19556C33.2798 7.19556 33.063 7.23869 32.8607 7.32249C32.6583 7.4063 32.4745 7.52913 32.3197 7.68398C32.1648 7.83883 32.042 8.02267 31.9582 8.22499C31.8744 8.42731 31.8312 8.64416 31.8312 8.86315C31.8312 9.08214 31.8744 9.29899 31.9582 9.50131C32.042 9.70363 32.1648 9.88747 32.3197 10.0423C35.0979 12.8272 36.6582 16.6003 36.6582 20.534C36.6582 24.4677 35.0979 28.2408 32.3197 31.0256C32.0069 31.3384 31.8312 31.7625 31.8312 32.2048C31.8312 32.6471 32.0069 33.0712 32.3197 33.384C32.6324 33.6967 33.0566 33.8724 33.4988 33.8724C33.9411 33.8724 34.3653 33.6967 34.678 33.384C38.0809 29.9733 39.9921 25.352 39.9921 20.534C39.9921 15.716 38.0809 11.0947 34.678 7.68398Z" fill="#52D1DC"/>
                        <path d="M30.167 12.6844C30.0122 12.529 29.8282 12.4056 29.6257 12.3213C29.4232 12.237 29.206 12.1934 28.9866 12.193C28.7673 12.1926 28.5499 12.2354 28.3471 12.319C28.1443 12.4026 27.9599 12.5254 27.8045 12.6802C27.6491 12.8351 27.5257 13.019 27.4414 13.2215C27.3571 13.4241 27.3135 13.6412 27.3131 13.8606C27.3128 14.08 27.3556 14.2973 27.4392 14.5001C27.5228 14.7029 27.6455 14.8873 27.8004 15.0427C29.2549 16.4995 30.0719 18.474 30.0719 20.5327C30.0719 22.5914 29.2549 24.5659 27.8004 26.0227C27.6455 26.1781 27.5228 26.3625 27.4392 26.5653C27.3556 26.7681 27.3128 26.9854 27.3131 27.2048C27.3135 27.4242 27.3571 27.6413 27.4414 27.8439C27.5257 28.0464 27.6491 28.2303 27.8045 28.3852C28.1184 28.6979 28.5436 28.8732 28.9866 28.8724C29.206 28.872 29.4232 28.8284 29.6257 28.7441C29.8282 28.6598 30.0122 28.5364 30.167 28.381C32.2459 26.2981 33.4135 23.4755 33.4135 20.5327C33.4135 17.5899 32.2459 14.7673 30.167 12.6844Z" fill="#52D1DC"/>
                        <path d="M23.0333 0.866763C17.9655 1.81888 13.4578 4.68318 10.4433 8.86676H8.33333C6.12428 8.87029 4.00671 9.7494 2.44467 11.3114C0.882632 12.8735 0.00352603 14.991 0 17.2001L0 23.8668C0.00352603 26.0758 0.882632 28.1934 2.44467 29.7554C4.00671 31.3175 6.12428 32.1966 8.33333 32.2001H10.4433C13.4584 36.383 17.9658 39.2472 23.0333 40.2001C23.1327 40.2195 23.2338 40.229 23.335 40.2284C23.777 40.2284 24.201 40.0528 24.5135 39.7403C24.8261 39.4277 25.0017 39.0038 25.0017 38.5618V2.5101C25.0023 2.26532 24.949 2.02341 24.8455 1.80157C24.7421 1.57972 24.5911 1.38338 24.4032 1.22651C24.2153 1.06963 23.9951 0.956073 23.7584 0.893897C23.5216 0.831722 23.2741 0.822457 23.0333 0.866763ZM21.6667 36.4251C17.9906 35.2533 14.8298 32.8522 12.715 29.6251C12.5639 29.3926 12.3572 29.2015 12.1136 29.0691C11.87 28.9367 11.5973 28.8672 11.32 28.8668H8.33333C7.00725 28.8668 5.73548 28.34 4.7978 27.4023C3.86012 26.4646 3.33333 25.1928 3.33333 23.8668V17.2001C3.33333 15.874 3.86012 14.6022 4.7978 13.6646C5.73548 12.7269 7.00725 12.2001 8.33333 12.2001H11.3333C11.6103 12.2001 11.8829 12.131 12.1264 11.9992C12.37 11.8674 12.5768 11.6769 12.7283 11.4451C14.8388 8.21882 17.9948 5.81667 21.6667 4.64176V36.4251Z" fill="#52D1DC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_40_125">
                        <rect width="40" height="40" fill="white" transform="translate(0 0.533081)"/>
                        </clipPath>
                    </defs>
                    </svg>
                </div>
            

                    <div>
                    <h2>Listening</h2>
                    <h2>Materials</h2>
                    </div>
                    
                    <p></p>
                    <Link to="/materials/Listening" style={{color:"#52D1DC"}}>Explore</Link>
                </div>
                <div className="homepage-materials-indv" style={{backgroundColor:"#FABC2A"}}>
                    <div className='homepage-materials-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 40 41" fill="none">
                        <g clip-path="url(#clip0_40_200)">
                            <path d="M28.3333 0.533081C27.8913 0.533081 27.4674 0.708676 27.1548 1.02124C26.8423 1.3338 26.6667 1.75772 26.6667 2.19975C26.6667 7.11475 22.3617 8.86641 18.3333 8.86641H6.66667C4.89856 8.86641 3.20286 9.56879 1.95262 10.819C0.702379 12.0693 0 13.765 0 15.5331L0 18.8664C0.00364027 19.8643 0.232436 20.8485 0.669338 21.7457C1.10624 22.6429 1.73998 23.4299 2.52333 24.0481L8.47667 37.3347C8.90006 38.2866 9.59029 39.0952 10.4638 39.6629C11.3373 40.2305 12.3566 40.5328 13.3983 40.5331C14.2272 40.5326 15.0427 40.3247 15.7708 39.9285C16.4988 39.5324 17.1162 38.9604 17.5667 38.2647C18.0173 37.569 18.2867 36.7716 18.3504 35.9453C18.4142 35.1189 18.2702 34.2896 17.9317 33.5331L14.265 25.5331H18.3333C22.3617 25.5331 26.6667 27.2847 26.6667 32.1997C26.6667 32.6418 26.8423 33.0657 27.1548 33.3783C27.4674 33.6908 27.8913 33.8664 28.3333 33.8664C28.7754 33.8664 29.1993 33.6908 29.5119 33.3783C29.8244 33.0657 30 32.6418 30 32.1997V2.19975C30 1.75772 29.8244 1.3338 29.5119 1.02124C29.1993 0.708676 28.7754 0.533081 28.3333 0.533081V0.533081ZM14.895 34.8981C15.0054 35.1474 15.0518 35.4203 15.0301 35.6921C15.0083 35.9639 14.9191 36.2259 14.7705 36.4545C14.6218 36.6831 14.4185 36.871 14.1789 37.0011C13.9393 37.1312 13.671 37.1995 13.3983 37.1997C13.0007 37.1995 12.6116 37.0837 12.2785 36.8666C11.9453 36.6494 11.6824 36.3402 11.5217 35.9764L6.84167 25.5331H10.5983L14.895 34.8981ZM26.6667 24.8664C24.2855 23.0317 21.3373 22.0883 18.3333 22.1997H6.66667C5.78261 22.1997 4.93477 21.8486 4.30964 21.2234C3.68452 20.5983 3.33333 19.7505 3.33333 18.8664V15.5331C3.33333 14.649 3.68452 13.8012 4.30964 13.1761C4.93477 12.5509 5.78261 12.1997 6.66667 12.1997H18.3333C21.3363 12.3136 24.2844 11.3731 26.6667 9.54141V24.8664ZM39.8333 26.2864C39.7356 26.4824 39.6002 26.6571 39.4348 26.8007C39.2695 26.9443 39.0775 27.0539 38.8697 27.1232C38.662 27.1926 38.4427 27.2203 38.2242 27.2048C38.0058 27.1894 37.7925 27.131 37.5967 27.0331L34.2633 25.3664C33.8677 25.1688 33.5668 24.8222 33.4268 24.4027C33.2867 23.9833 33.3191 23.5254 33.5167 23.1297C33.7143 22.7341 34.0609 22.4332 34.4804 22.2932C34.8998 22.1532 35.3577 22.1855 35.7533 22.3831L39.0867 24.0497C39.4803 24.2472 39.7797 24.5924 39.9196 25.0099C40.0595 25.4274 40.0285 25.8834 39.8333 26.2781V26.2864ZM33.5167 11.2864C33.4187 11.0905 33.3604 10.8773 33.3449 10.6589C33.3294 10.4404 33.3572 10.2211 33.4265 10.0133C33.4958 9.80563 33.6054 9.61362 33.749 9.44827C33.8926 9.28293 34.0674 9.14751 34.2633 9.04975L37.5967 7.38308C37.9923 7.18549 38.4502 7.15316 38.8696 7.29319C39.2891 7.43321 39.6357 7.73413 39.8333 8.12975C40.0309 8.52536 40.0633 8.98326 39.9232 9.40272C39.7832 9.82218 39.4823 10.1688 39.0867 10.3664L35.7533 12.0331C35.5575 12.131 35.3442 12.1894 35.1258 12.2048C34.9073 12.2203 34.688 12.1926 34.4803 12.1232C34.2726 12.0539 34.0805 11.9443 33.9152 11.8007C33.7499 11.6571 33.6144 11.4824 33.5167 11.2864ZM33.3333 17.1997C33.3333 16.7577 33.5089 16.3338 33.8215 16.0212C34.1341 15.7087 34.558 15.5331 35 15.5331H38.3333C38.7754 15.5331 39.1993 15.7087 39.5119 16.0212C39.8244 16.3338 40 16.7577 40 17.1997C40 17.6418 39.8244 18.0657 39.5119 18.3783C39.1993 18.6908 38.7754 18.8664 38.3333 18.8664H35C34.558 18.8664 34.1341 18.6908 33.8215 18.3783C33.5089 18.0657 33.3333 17.6418 33.3333 17.1997Z" fill="#FABC2A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_40_200">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.533081)"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div>
                    <h2>Speaking</h2>
                    <h2>Materials</h2>
                    </div>
                    
                    <p></p>
                    <Link to="/materials/Speaking" style={{color:"#FABC2A"}}>Explore</Link>
                </div>
                <div className="homepage-materials-indv" style={{backgroundColor:"#93FF96"}}>
                    <div className='homepage-materials-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 40 41" fill="none">
                        <g clip-path="url(#clip0_40_186)">
                            <path d="M37 4.1381C36.0631 3.35464 34.9651 2.78708 33.7841 2.4757C32.6031 2.16433 31.3681 2.11678 30.1667 2.33643L23.7967 3.4931C22.326 3.76317 20.9888 4.51981 20 5.64143C19.0086 4.51787 17.6676 3.76106 16.1933 3.4931L9.83333 2.33643C8.63193 2.11659 7.39689 2.16351 6.21563 2.47389C5.03437 2.78426 3.93578 3.3505 2.99761 4.13252C2.05944 4.91454 1.30464 5.89321 0.786637 6.99927C0.26863 8.10534 8.13541e-05 9.31174 0 10.5331L0 28.5214C9.57598e-05 30.4728 0.684961 32.3622 1.93522 33.8604C3.18548 35.3585 4.92185 36.3705 6.84167 36.7198L17.3183 38.6248C19.0916 38.947 20.9084 38.947 22.6817 38.6248L33.1667 36.7198C35.085 36.3687 36.8194 35.3561 38.068 33.858C39.3166 32.36 40.0003 30.4716 40 28.5214V10.5331C40.0008 9.31217 39.7323 8.10609 39.2138 7.00075C38.6952 5.89541 37.9394 4.91799 37 4.1381ZM18.3333 35.4131C18.1933 35.3931 18.0533 35.3698 17.9133 35.3448L7.43833 33.4414C6.28627 33.2318 5.24432 32.6245 4.49415 31.7254C3.74397 30.8263 3.33316 29.6924 3.33333 28.5214V10.5331C3.33333 9.20701 3.86012 7.93524 4.7978 6.99756C5.73548 6.05988 7.00725 5.5331 8.33333 5.5331C8.63515 5.53382 8.93632 5.56114 9.23333 5.61476L15.6 6.78143C16.366 6.9216 17.0588 7.32555 17.5581 7.92317C18.0574 8.52079 18.3316 9.27436 18.3333 10.0531V35.4131ZM36.6667 28.5214C36.6668 29.6924 36.256 30.8263 35.5059 31.7254C34.7557 32.6245 33.7137 33.2318 32.5617 33.4414L22.0867 35.3448C21.9467 35.3698 21.8067 35.3931 21.6667 35.4131V10.0531C21.6665 9.27245 21.9404 8.51652 22.4405 7.91711C22.9407 7.3177 23.6353 6.91283 24.4033 6.7731L30.7717 5.60643C31.4929 5.47521 32.2341 5.50418 32.9429 5.69128C33.6516 5.87838 34.3106 6.21903 34.873 6.68911C35.4355 7.15918 35.8877 7.74719 36.1977 8.41147C36.5077 9.07575 36.6678 9.80006 36.6667 10.5331V28.5214Z" fill="#93FF96"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_40_186">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.533081)"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div>
                    <h2>Reading</h2>
                    <h2>Materials</h2>
                    </div>
                    
                    <p></p>
                    <Link to="/materials/Reading" style={{color:"#93FF96"}}>Explore</Link>
                </div>
                <div className="homepage-materials-indv" style={{backgroundColor:"#FF5E5B"}}>
                    <div className="homepage-materials-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 40 41" fill="none"> <g clip-path="url(#clip0_40_190)"> <path d="M38.0886 2.44646C36.9555 1.31512 35.4198 0.679688 33.8186 0.679688C32.2174 0.679688 30.6817 1.31512 29.5486 2.44646L2.44194 29.5531C1.66569 30.325 1.05021 31.2432 0.631099 32.2544C0.211993 33.2657 -0.00241915 34.3501 0.000269109 35.4448V38.8665C0.000269109 39.3085 0.175864 39.7324 0.488425 40.045C0.800985 40.3575 1.22491 40.5331 1.66694 40.5331H5.0886C6.18321 40.5362 7.26755 40.3222 8.27886 39.9033C9.29017 39.4845 10.2084 38.8692 10.9803 38.0931L38.0886 10.9848C39.2194 9.85178 39.8545 8.3164 39.8545 6.71563C39.8545 5.11485 39.2194 3.57947 38.0886 2.44646ZM8.6236 35.7365C7.68361 36.6702 6.41354 37.196 5.0886 37.1998H3.3336V35.4448C3.33192 34.788 3.46053 34.1373 3.712 33.5305C3.96347 32.9238 4.33279 32.3729 4.7986 31.9098L25.3703 11.3381L29.2036 15.1715L8.6236 35.7365ZM35.7303 8.62813L31.5536 12.8065L27.7203 8.98146L31.8986 4.80313C32.1503 4.55197 32.449 4.35285 32.7777 4.21714C33.1063 4.08143 33.4585 4.01178 33.814 4.01216C34.1696 4.01255 34.5216 4.08297 34.85 4.2194C35.1783 4.35582 35.4766 4.55559 35.7278 4.80729C35.9789 5.05899 36.178 5.3577 36.3138 5.68635C36.4495 6.015 36.5191 6.36717 36.5187 6.72274C36.5183 7.07831 36.4479 7.43032 36.3115 7.75868C36.1751 8.08704 35.9753 8.38531 35.7236 8.63646L35.7303 8.62813Z" fill="#FF5E5B"/> </g> <defs> <clipPath id="clip0_40_190"> <rect width="40" height="40" fill="white" transform="translate(0 0.533081)"/> </clipPath> </defs> </svg>
                    </div>

                    <div>
                    <h2>Writing</h2>
                    <h2>Materials</h2>
                    </div>
                    
                    <p></p>
                    <Link to="/materials/Writing" style={{color:"#FF5E5B"}}>Explore</Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default HomePage
