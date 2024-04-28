import React from 'react'
import Navbar from '../../../../components/teacherNav'
import UploadNavbar from '../../../../components/upNav'
import './UploadD.css'

const UploadC = () => {
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
            <h2>Comprehension</h2>
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
                <label htmlFor='question'>Question:</label>
                <input type='text' id='question' name='question' />
              </div>
              <div className='form-group'>
                <label htmlFor='option1'>Option 1:</label>
                <input type='text' id='option1' name='option1' />
              </div>
              <div className='form-group'>
                <label htmlFor='option2'>Option 2:</label>
                <input type='text' id='option2' name='option2' />
              </div>
              <div className='form-group'>
                <label htmlFor='option3'>Option 3:</label>
                <input type='text' id='option3' name='option3' />
              </div>
              <div className='form-group'>
                <label htmlFor='correctAnswer'>Correct Answer:</label>
                <select id='correctAnswer' name='correctAnswer'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default UploadC