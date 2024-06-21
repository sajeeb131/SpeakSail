import React from 'react'
import 'react-h5-audio-player/lib/styles.css'


const QuestionCE = ({lesson}) => {
  return (
    <div>
      <div className='question-qa-question'>
        <span>Dialogue 1: {lesson.dialogues[0]}</span>
        <span>Dialogue 2: {lesson.dialogues[1]}</span>
        <span>Dialogue 3: {lesson.dialogues[2]}</span>
      </div>
      
  
    </div>
  )
}

export default QuestionCE
