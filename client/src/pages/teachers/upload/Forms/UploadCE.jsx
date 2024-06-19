import React, { useEffect, useState } from 'react';
import './UploadD.css';

const UploadCE = () => {
  const [lessonName, setLessonName] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [lessonNameError, setLessonNameError] = useState('');
  const [classError, setClassError] = useState('');
  const [dialogues, setDialogues] = useState([]);
  const [lessonNumber, setLessonNumber] = useState('');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/speaking/conversation-exchange/`);
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


  const handleClassChange = (event) => {
    setClassNumber(event.target.value);
  };


  const handleDialogueChange = (event, index) => {
    const { value } = event.target;
    const newDialogues = [...dialogues];
    newDialogues[index] = value;
    setDialogues(newDialogues);
  };

  const handleSubmit = async (event) => {


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
    
    

    // Handle empty questions
    if (dialogues.some((question) => !question.trim())) {
      setClassError('Some dialogues are empty');
      return;
    }

    

    try {
        const response = await fetch('http://localhost:4000/lessons/speaking/conversation-exchange', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({lessonNumber, dialogues})
        });
        console.log('this here')
        if (!response.ok) {
            throw new Error('Failed to submit data');
        }

        console.log('Data submitted successfully');
    } catch (error) {
        console.error(error.message);
    }
  };

  return (
    <div className='upload-container'>
      
      <div className='content-right'>
        
        <div className='down'>
          <h2>Conversation Exchange</h2>
          <form onSubmit={handleSubmit}>
            
            <div className='form-group'>
              <label htmlFor='class'>Class:</label>
              <input type='text' id='class' name='class' placeholder='Enter class here' onChange={handleClassChange} />
              {classError && <div className='error'>{classError}</div>}
            </div>
            
            {[1, 2, 3].map((_, index) => (
              <div className='form-group' key={index}>
                <label htmlFor={`question${index + 1}`}>{`Dialogue ${index + 1}:`}</label>
                <input
                  type='text'
                  id={`question${index + 1}`}
                  name={`question${index + 1}`}
                  placeholder={`Enter dialogue ${index+1} here`}
                  onChange={(event) => handleDialogueChange(event, index)}
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

export default UploadCE;
