import React, { useEffect, useState } from 'react';
import Navbar from '../../../../components/teacherNav';
import UploadNavbar from '../../../../components/upNav';
import './UploadD.css';

const UploadQA = () => {
  const [lessonName, setLessonName] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [lessonNameError, setLessonNameError] = useState('');
  const [classError, setClassError] = useState('');
  const [file, setFile] = useState('');
  const [questions, setQuestions] = useState([]);
  const [lessonNumber, setLessonNumber] = useState('');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/listening/qa/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLessonNumber(data.lessons.length+1);
        console.log(lessonNumber)
      } catch (error) {
        console.error('Error fetching lesson:', error);
      }
    };
    fetchLessons();
  }, []);

  const handleLessonNameChange = (event) => {
    setLessonName(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassNumber(event.target.value);
  };

  const handleAudioChange = (event) => {
    const selectedFile = event.target.files[0];
    const audioBlob = new Blob([selectedFile], { type: selectedFile.type });
    setFile(audioBlob);
  };

  const handleQuestionChange = (event, index) => {
    const { value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    // Validate Lesson Name
    if (!lessonName.trim()) {
      setLessonNameError('Lesson Name cannot be empty');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(lessonName.trim())) {
      setLessonNameError('Lesson Name should contain alphabets only');
      return;
    } else {
      setLessonNameError('');
    }

    // Validate Class Number
    if (!classNumber.trim()) {
      setClassError('Class Number cannot be empty');
      return;
    } else if (!/^[1-5]+$/.test(classNumber.trim())) {
      setClassError('Class Number should contain numbers only and be 1, 2, 3, 4, or 5');
      return;
    } else {
      setClassError('');
    }
    
    // Handle empty audio file path
    if (!file) {
      setClassError('Audio file empty');
      return;
    }

    // Handle empty questions
    if (questions.some((question) => !question.trim())) {
      setClassError('Some questions are empty');
      return;
    }

    

    try {
      console.log(file)
      const formData = new FormData();
      formData.append('lessonNumber', lessonNumber);
      formData.append('lessonName', lessonName);
      formData.append('file', file); 

      questions.forEach((question, index) => {
        formData.append(`question${index + 1}`, question);
      });

      const response = await fetch('http://localhost:4000/lessons/listening/qa', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      console.log('Data submitted successfully');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='upload-container'>
      <div className='sideBar'>
        <Navbar />
      </div>
      <div className='content-right'>
        <div className='upp'>
          <UploadNavbar />
        </div>
        <div className='down'>
          <h2>Question and Answers</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='lessonNumber'>Lesson Name:</label>
              <input type='text' id='lessonNumber' name='lessonNumber' placeholder='Enter lesson name here' onChange={handleLessonNameChange} />
              {lessonNameError && <div className='error'>{lessonNameError}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='class'>Class:</label>
              <input type='text' id='class' name='class' placeholder='Enter class here' onChange={handleClassChange} />
              {classError && <div className='error'>{classError}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='audioFile'>Audio File:</label>
              <input type='file' id='audioFile' name='audioFile' accept='audio/*' onChange={handleAudioChange} />
            </div>
            {[1, 2, 3].map((_, index) => (
              <div className='form-group' key={index}>
                <label htmlFor={`question${index + 1}`}>{`Question ${index + 1}:`}</label>
                <input
                  type='text'
                  id={`question${index + 1}`}
                  name={`question${index + 1}`}
                  placeholder={`Enter question ${index+1} here`}
                  onChange={(event) => handleQuestionChange(event, index)}
                />
              </div>
            ))}
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadQA;
