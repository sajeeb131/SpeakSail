import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import Navbar from '../../components/Navbar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AiOutlineSound } from "react-icons/ai";
import './ListeningStyle.css';
import Footer from '../../components/Footer';
import SubmissionPopup from '../../components/pop-up/submissionPopup';


const QuestionAnswer = () => {
    const { lessonNumber } = useParams();
    const [progressPercentage, setProgress] = useState(40); 
    const [lesson, setLesson] = useState({ audioFilePath: '', questions: ['', '', ''] });
    const [answers, setAnswers] = useState(['', '', '']);
    const studentID = localStorage.getItem('user')
    const studentName = localStorage.getItem('name')
    const [popUp, setPopup] = useState(false);

    // Fetching lesson data
    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await fetch(`http://localhost:4000/lessons/listening/qa/${lessonNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setLesson(data);
            } catch (error) {
                console.error('Error fetching lesson:', error);
            }
        };

        fetchLesson();
    }, [lessonNumber]);
  
    // Handle form submission
    const handleSubmit = async () => {
      try {
        //   const formData = new FormData();
        //   formData.append('lessonNumber', lessonNumber);
        //   formData.append('studentID', localStorage.getItem('user'));

        //   lesson.questions.forEach((question, index) => {
        //       formData.append(`answer${index + 1}`, answers[index]);
        //   });

          const response = await fetch('http://localhost:4000/lessons/listening/qa/answer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({lessonNumber, studentID, studentName, answers}),
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
  

    // Conditional rendering to handle case when lesson is still null
    if (!lesson || !lesson.questions || lesson.questions.length !== 3) {
        return <div>Loading...</div>;
    }
  
    return (
        <div>
            <Navbar/>
            <div className='container-qa'> 
                <div className='qa-main'>
                    <ProgressBar progress={progressPercentage}/>
                    <div className="qa-top">
                        <h1>Question/Answer</h1>
                        <div className="qa-top-r">
                            <AiOutlineSound size={28} color='blue'/>
                            <AudioPlayer 
                                src={lesson.audioFilePath}
                                onPlay={e=>console.log("onPlay")}
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
                <hr className="sd-horizontal-line"/>
                <div className='container-sd-button'>
                    <button className='sd-button1'>Can't listen now</button>
                    <button className='sd-button2' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <SubmissionPopup showPopup={popUp} onClose = {()=>setPopup(false)}/>
            <Footer/>
        </div>
    );
};

export default QuestionAnswer;
