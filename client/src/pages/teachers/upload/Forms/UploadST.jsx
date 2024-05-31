import React, { useEffect, useState } from 'react'
import './UploadD.css'

const UploadST = () => {
  const [lessonName, setLessonName] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [lessonNumber, setLessonNumber] = useState('')
  const [story, setStory] = useState('')
  const [lessonNameError, setLessonNameError] = useState('');
  const [storyError, setStoryError] = useState('');
  const [classError, setClassError] = useState('');
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/speaking/storytelling/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
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
  const changeStory = (e) => {
    setStory(e.target.value)
  }


  const handleSubmit = async (e) =>{
    console.log(lessonNumber)
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
    if (!story.trim()) {
      setStoryError('story cannot be empty');
      return;
    } 
     else {
      setStoryError('');
    }

   
    try{
      const response = await fetch('http://localhost:4000/lessons/speaking/storytelling',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({lessonNumber, story})
      })
      if(!response.ok){
        throw new Error('Failed to submit storytelling exercise')
      }
      else{
        console.log('New exercise created')
      }
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <div className='upload-container'>
    
      <div className='content-right'>
          
          <div className='down'>
              <h2>Storytelling</h2>
            <form>
              
              <div className='form-group'>
                <label htmlFor='class'>Class:</label>
                <input type='text' id='class' name='class' placeholder='Enter class here' onChange={changeClass}/>
                {classError && <div className='error'>{classError}</div>}
              </div>
              <div className='form-group'>
                <label htmlFor='story'>Story:</label>
                <textarea id='story' name='story' rows='4' className='storyArea' placeholder='Start writing the story here...' onChange={changeStory} ></textarea>
                {storyError && <div>{storyError}</div>}
              </div>
              <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default UploadST