import React, { useEffect, useState } from 'react'
import './UploadD.css'

const UploadC = () => {
  const [classNumber, setClassNumber] = useState('');
  const [lessonNumber, setLessonNumber] = useState('')
  const [passage, setPassage] = useState('')
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([])
  const [passageError, setPassageError] = useState('');
  const [classError, setClassError] = useState('');
  const [questionError, setQuestionError] = useState('')

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/reading/comprehension/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        console.log(data.lessons.length)
        setLessonNumber(data.lessons.length+1)

      } catch (error) {
          console.error('Error fetching lesson:', error);
      }
      
    };
    fetchLessons()
  },[])

  const changeClass = (e) =>{
    setClassNumber(e.target.value)
  }
  const changePassage = (e) =>{
    setPassage(e.target.value)
  }
  const changeQuestion = (e) =>{
    setQuestion(e.target.value)
  }
  const changeOption = (event, index) => {
    const { value } = event.target;
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };



  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (!question.trim()) {
      setClassError('Question cannot be empty');
      return;
    }else{
      setQuestionError('');
    }

    if (!passage.trim()) {
      setPassageError('passage cannot be empty');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(passage.trim())) {
      setPassageError('Passage should contain alphabets only');
      return;
    } else {
      setPassageError('');
    }
    
    try{

      const response = await fetch('http://localhost:4000/lessons/reading/comprehension',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({lessonNumber, passage, question, options})
      })
      if(!response.ok){
        throw new Error('Failed to create Comprehension exercise!')
      }
      console.log('New exercises created!')

    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <div className='upload-container'>
        <div className='content-right'>
            
            <div className='down'>
            <h2>Comprehension</h2>
            <form onSubmit={handleSubmit}>
              
              <div className='form-group'>
                <label htmlFor='class'>Class:</label>
                <input type='text' id='class' name='class' placeholder='Enter class here' onChange = {changeClass}/>
              </div>
              <div className='form-group'>
                <label htmlFor='story'>Story:</label>
                <textarea id='story' name='story' rows='4' column='10'  className='passageArea' onChange={changePassage} ></textarea>
                {passageError && <div>{passageError}</div>}
              </div>
              <div className='form-group'>
                <label htmlFor='question'>Question:</label>
                <input type='text' id='question' name='question' placeholder='Enter Question here' onChange={changeQuestion}/>
              </div>
              
              {[1, 2, 3].map((_, index) => (
                <div className='form-group' key={index}>
                  <label htmlFor={`option${index + 1}`}>{`option ${index + 1}:`}</label>
                  <input
                    type='text'
                    id={`option${index + 1}`}
                    name={`option${index + 1}`}
                    placeholder={`Enter option ${index+1} here`}
                    onChange={(event) => changeOption(event, index)}
                  />
                </div>
              ))}
              {/* <div className='form-group'>
                <label htmlFor='correctAnswer'>Correct Answer:</label>
                <select id='correctAnswer' name='correctAnswer'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              </div> */}
              <button type='submit'>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default UploadC