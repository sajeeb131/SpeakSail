import React from 'react'
import Navbar from '../../../../components/teacherNav'
import UploadNavbar from '../../../../components/upNav'
import './UploadD.css'


const UploadQA = () => {
  return (
    <div className='upload-container'>
    <div className='sideBar'>
      <Navbar/>
    </div>
      <div className='content-right'>
          <div className='upp'>
              <UploadNavbar/>
          </div>
          <div className='down'>
          <h2>Question and Answers</h2>
            <form>
                <div className='form-group'>
                  <label htmlFor='lessonNumber'>Lesson Number:</label>
                  <input type='text' id='lessonNumber' name='lessonNumber' />
                </div>
                <div className='form-group'>
                  <label htmlFor='class'>Class:</label>
                  <input type='text' id='class' name='class' />
                </div>
                <div className='form-group'>
                  <label htmlFor='audioFile'>Audio File:</label>
                  <input type='file' id='audioFile' name='audioFile' accept='audio/*' />
                </div>
                <div className='form-group'>
                  <label htmlFor='question1'>Question 1:</label>
                  <input type='text' id='question1' name='question1' />
                </div>
                <div className='form-group'>
                  <label htmlFor='question2'>Question 2:</label>
                  <input type='text' id='question2' name='question2' />
                </div>
                <div className='form-group'>
                  <label htmlFor='question3'>Question 3:</label>
                  <input type='text' id='question3' name='question3' />
                </div>
                <button type='submit'>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default UploadQA