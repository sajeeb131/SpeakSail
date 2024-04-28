import React from 'react'
import Navbar from '../../../../components/teacherNav'
import UploadNavbar from '../../../../components/upNav'
import './UploadD.css'

const UploadSD = () => {
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
          <h2>Sentence Dictation</h2>
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
            <button type='submit'>Submit</button>
          </form>
        </div>
    </div>
    </div>
  )
}

export default UploadSD