import React from 'react'
import './Comprehension.css';
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { useNavigate, useParams } from 'react-router-dom';
import SubmissionPopup from '../../components/pop-up/submissionPopup';

const Comprehension = (lessonType, lessonNumber) => {
    const navigate = useNavigate()
    const [progressPercentage, setProgress] = useState(40); 
    lessonNumber = useParams().lessonNumber
    const [lesson, setLesson] = useState([]);   
    const studentID = localStorage.getItem('user')
    const [answers, setAnswer] = useState(null)
    const [options, setOptions] = useState(null)
    const [popUp, setPopup] = useState(false);

    const handleCheckboxChange = (selectedOption) => {
        const updatedAnswers = lesson.options.map(option => option === selectedOption ? option : null);
        setOptions(updatedAnswers)
        setAnswer(selectedOption);
        console.log(answers)
    }


    useEffect(() => {
        const fetchLesson = async () => {  
            try {
                console.log(lessonNumber)
                const response = await fetch(`http://localhost:4000/lessons/reading/comprehension/${lessonNumber}`);
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
    }, []);


    //submit code
    const handleSubmit = async(e) =>{
        e.preventDefault()
        // console.log('here')
        try{
            console.log(lessonNumber, studentID, answers)
            const response = await fetch('http://localhost:4000/lessons/reading/comprehension/answer',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({lessonNumber, studentID, answers})
            })
            if (!response.ok) {
                throw new Error('Failed to submit answers');
            }   
            setPopup(true);
   
        
        }catch(error){
            console.error('Error submitting answer: ', error)
        }
    }

    if (!lesson ) {
        return <div>Loading...</div>;
    }
  return (
    <div className='main-container'>
        <Navbar/>
        <ProgressBar progress={[progressPercentage]}/>
            <div className='container'>
                <h1>Comprehension</h1>
                <p>{lesson.passage}</p>
                <form>
                    <h3>{lesson.question}</h3>
                    {lesson.options && lesson.options.length > 0 && lesson.options.map((option, index) => (
                        <div key={index}>
                            <label htmlFor={option}>
                                <input 
                                type="checkbox" 
                                id={option} 
                                name="answer" 
                                value={option} 
                                checked={options && options[index] === option}
                                onChange={() => handleCheckboxChange(option)}/>
                                {option}
                            </label>
                            <br />
                        </div>
                    ))}
                    <button type="submit" className='btn-submit' onClick={handleSubmit}>Submit</button>
                </form>
                <SubmissionPopup showPopup={popUp} onClose = {()=>setPopup(false)}/>
            </div>
        <div className='bottom-tag'>
        <Footer/>
        </div>
    </div>
  )
}

export default Comprehension