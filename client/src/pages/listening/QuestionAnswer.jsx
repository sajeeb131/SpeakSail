import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import Navbar from '../../components/Navbar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AiOutlineSound } from "react-icons/ai";
import './ListeningStyle.css';
import Footer from '../../components/Footer';
import SubmissionPopup from '../../components/pop-up/submissionPopup';
import { calculateProgress } from '../../components/progress-bar/CalculateProgress';

const QuestionAnswer = () => {
    const userID = localStorage.getItem('user');
    const navigate = useNavigate();
    const { lessonNumber } = useParams();
    const [progressPercentage, setProgress] = useState(null);
    const [lesson, setLesson] = useState({ audioFilePath: '', questions: ['', '', ''] });
    const [answers, setAnswers] = useState(['', '', '']);
    const studentID = localStorage.getItem('user');
    const studentName = localStorage.getItem('name');
    const [popUp, setPopup] = useState(false);

    useEffect(() => {
        const fetchLessonData = async () => {
            try {
                const lessonResponse = await fetch(`http://localhost:4000/lessons/listening/qa/${lessonNumber}`);
                if (!lessonResponse.ok) {
                    throw new Error('Failed to fetch lesson data');
                }
                const lessonData = await lessonResponse.json();
                setLesson(lessonData);

                const progress = await calculateProgress(userID, 'listening','qa', 'question_answer');
                setProgress(progress);
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };

        fetchLessonData();
    }, [lessonNumber, userID]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/lessons/listening/qa/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ lessonNumber, studentID, studentName, answers }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit answers');
            }
            setPopup(true);
            console.log('Answers submitted successfully');
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    const handleSkipButton = ()=>{
        navigate(-1)
    }

    if (!lesson || !lesson.questions || lesson.questions.length !== 3 || progressPercentage === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='container-qa'>
                <div className='qa-main'>
                    <ProgressBar progress={progressPercentage} />
                    <div className="qa-top">
                        <h1>Question/Answer</h1>
                        <div className="qa-top-r">
                            <AiOutlineSound size={28} color='blue' />
                            <AudioPlayer
                                src={lesson.audioFilePath}
                                onPlay={() => console.log("onPlay")}
                            />
                        </div>
                    </div>
                    <div className="qa-middle">
                        {lesson.questions.map((question, index) => (
                            <div className="qa-middle-q" key={index}>
                                <p>Ques {index + 1}. {question}</p>
                                <textarea
                                    value={answers[index]}
                                    onChange={(e) => {
                                        const newAnswers = [...answers];
                                        newAnswers[index] = e.target.value;
                                        setAnswers(newAnswers);
                                    }}
                                    cols="50"
                                    rows="2"
                                    placeholder='Start writing...'
                                ></textarea>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="sd-horizontal-line" />
                <div className='container-sd-button'>
                    <button className='sd-button1' onClick={handleSkipButton} >Can't listen now</button>
                    <button className='sd-button2' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
            <Footer />
        </div>
    );
};

export default QuestionAnswer;
