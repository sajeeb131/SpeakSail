import React from 'react'
import './Comprehension.css';
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { useParams } from 'react-router-dom';

const Comprehension = (lessonType, lessonNumber) => {
    const [progressPercentage, setProgress] = useState(40); 
    lessonNumber = useParams().lessonNumber
    const [lesson, setLesson] = useState([]); 

    useEffect(() => {
        const fetchLesson = async () => {
            
            try {
            
            console.log(lessonNumber)
                const response = await fetch(`http://localhost:4000/lessons/reading/comprehension/${lessonNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                setLesson(data); // Set the lesson state with the fetched data
                console.log(lesson.options[0])
            } catch (error) {
                console.error('Error fetching lesson:', error);
            }
        };

        // Call the fetchLesson function when the component mounts
        fetchLesson();
    }, []);

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
                                <input type="checkbox" id={option} name="answer" value={option} /> {option}
                            </label>
                            <br />
                        </div>
                    ))}

                    <button type="submit" className='btn-submit'>Submit</button>
                </form>
            </div>
        <div className='bottom-tag'>
        <Footer/>
        </div>
    </div>
  )
}

export default Comprehension