import React, { useEffect, useState } from 'react'
import './UploadD.css'

const UploadPD = () => {
  const [lessonName, setLessonName] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [file, setFile] = useState('');
  const [lessonNameError, setLessonNameError] = useState('');
  const [classError, setClassError] = useState('');
  const [fileError, setFileError] = useState('')
  const [lessonNumber, setLessonNumber] = useState('')

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/writing/picturedescription/`);
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
  const changeLessonName = (e) => {
    setLessonName(e.target.value)
  }
  const changeImage = (e) =>{
    const selectedFile = e.target.files[0];
    const imageBlob = new Blob([selectedFile], { type: selectedFile.type });
    setFile(imageBlob)
  }

  const handleSubmit = async (e) =>{

    if (!lessonName.trim()) {
      setLessonNameError('Lesson Name cannot be empty');
      return;
    } else {
      setLessonNameError('');
    }
    if(!file){
      setFileError('No file Selected')
    }
    if (!classNumber.trim()) {
      setClassError('Class Number cannot be empty');
      return;
    } else if (!/^[1-5]+$/.test(classNumber.trim())) {
      setClassError('Class Number should contain numbers only and be 1, 2, 3, 4, or 5');
      return;
    } else {
      setClassError('');
    }
    
    try{
      const formData = new FormData();
      formData.append('lessonNumber', lessonNumber);
      formData.append('lessonName', lessonName);
      formData.append('file', file);
      const response = await fetch('http://localhost:4000/lessons/writing/picturedescription',{
        method: 'POST',
        body: formData
      })
      if(!response.ok){
        throw new Error('Failed to create new picture description exercise!')
      }
      console.log('New exercise created!')
    }catch(error){
      console.log(error.message)
    }
  }

  return (
    <div className='upload-container'>
      
      <div className='content-right'>
          
          <div className='down'>
            <h2>Picture Description</h2>
            <form onSubmit={handleSubmit}> 
              <div className='form-group'>
                <label htmlFor='lessonNumber'>Lesson Name:</label>
                <input type='text' id='lessonNumber' name='lessonNumber' placeholder="Enter lesson name here" onChange={changeLessonName}/>
                {lessonNameError && <div>{lessonNameError} </div>}
              </div>
              <div className='form-group'>
                <label htmlFor='class'>Class: </label>
                <input type='text' id='class' name='class' placeholder='Enter class here' onChange={changeClass}/>
                {classError && <div> {classError}</div>}
              </div>
              <div className='form-group'>
                <label htmlFor='image'>Image:</label>
                <input type='file' id='image' name='image' accept='image/*'  onChange={changeImage}/>
                {fileError && <div> {fileError}</div>}
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default UploadPD