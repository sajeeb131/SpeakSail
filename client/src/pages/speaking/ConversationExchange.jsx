import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import { FaCheckCircle } from "react-icons/fa";
import "./StorytellingStyle.css";
import Recorder from '../../components/recorder/Recorder';
import SubmissionPopup from '../../components/pop-up/submissionPopup';
import { calculateProgress } from '../../components/progress-bar/CalculateProgress';
import icon from '../../assets/icons/image4.png';

const ConversationExchange = (progress) => {
    const userID = localStorage.getItem('user');
    const navigate = useNavigate();
    const { lessonNumber } = useParams();
    const [progressPercentage, setProgress] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [popUp, setPopup] = useState(false);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [recordings, setRecordings] = useState([]);
    const [isRecorded, setIsRecorded] = useState([]);
    const [isDisabled, setIsDisabled] = useState([]);
    const [allRecorded, setAllRecorded] = useState(false);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await fetch(`http://localhost:4000/lessons/speaking/conversation-exchange/${lessonNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setLesson(data);

                const progress = await calculateProgress(userID, 'speaking', 'conversation-exchange', 'conversation_exchange');
                setProgress(progress);
                setIsRecorded(new Array(data.dialogues.length).fill(false)); // Initialize recording state
                setIsDisabled(new Array(data.dialogues.length).fill(false)); // Initialize disabled state
            } catch (error) {
                console.error('Error fetching lesson:', error);
            }
        };
        fetchLesson();
    }, [lessonNumber]);

    const handleRecordingStop = (blob, index) => {
        const newRecordings = [...recordings];
        newRecordings[index] = blob;
        setRecordings(newRecordings);

        const newIsRecorded = [...isRecorded];
        newIsRecorded[index] = true;
        setIsRecorded(newIsRecorded);

        // Check if all recordings are done
        if (newIsRecorded.every(recorded => recorded)) {
            setAllRecorded(true);
        }
    };

    const handleDoneClick = (index) => {
        setCurrentDialogueIndex(currentDialogueIndex + 1);
        const newIsDisabled = [...isDisabled];
        newIsDisabled[index] = true;
        setIsDisabled(newIsDisabled);
    };

    const handleAudioSubmit = async () => {
        if (recordings.length === lesson.dialogues.length && recordings.every(blob => blob)) {
            try {
                const formData = new FormData();
                recordings.forEach((blob, index) => {
                    formData.append(`audio${index + 1}`, blob, `audio${index + 1}.webm`);
                });
                formData.append('lessonType', 'Conversation Exchange');
                formData.append('lessonNumber', lessonNumber);
                formData.append('studentID', localStorage.getItem('user'));
    
                const response = await fetch('http://localhost:4000/lessons/speaking/conversation-exchange/answer', {
                    method: 'POST',
                    body: formData,
                });
    
                if (!response.ok) {
                    throw new Error('Failed to submit audio');
                }
    
                setPopup(true);
                console.log('Audio submitted successfully');
            } catch (error) {
                console.error('Error submitting audio:', error);
            }
        } else {
            console.warn('Required fields are missing');
        }
    };
    

    const handleSkipButton = () => {
        navigate(-1);
    };

    if (!lesson || progressPercentage === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div className='container-st'>
                <div className='st-main'>
                    <ProgressBar progress={progressPercentage} />
                    <div className="ce-top">
                        <h1>Conversation Exchange</h1>
                        {lesson.dialogues.map((dialogue, index) => (
                            index <= currentDialogueIndex && (
                                <div className={`ce-dialogue ${isDisabled[index] ? 'disabled' : ''}`} key={index}>
                                    <div className='dialogue-main'>
                                        <div className='dialogue-and-icon'>
                                            <img src={icon} alt="" width='42px' height='42px' />
                                            <p className='ce-dialogue-p'>{dialogue}</p>
                                        </div>
                                        
                                        {isRecorded[index] && (
                                            <FaCheckCircle
                                                size={40}
                                                className='done-icon'
                                                onClick={() => handleDoneClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </div>
                                    <Recorder onRecordingStop={(blob) => handleRecordingStop(blob, index)} disabled={isDisabled[index]} />
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <hr className="sd-horizontal-line" />
                <div className='container-sd-button'>
                    <button className='sd-button1' onClick={handleSkipButton}>Can't Record now</button>
                    {allRecorded && <button className='sd-button2' onClick={handleAudioSubmit} >Submit</button>}
                </div>
            </div>
            <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
            <Footer />
        </div>
    );
};

export default ConversationExchange;
