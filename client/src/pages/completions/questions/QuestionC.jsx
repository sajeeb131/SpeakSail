import React from 'react'

const QuestionC = ({lesson}) => {
  console.log(lesson)
  return (
    <div className='question-comprehension'>
      <div className='question-comprehension-passage'>
        <span>{lesson.passage}</span>
      </div>
      <div className='question-comprehension-question'>
        <span>{lesson.question}</span>
      </div>
      <div className='question-comprehension-options'>
        <span>Option 1: {lesson.options[0]}</span>
        <span>Option 2:{lesson.options[1]}</span>
        <span>Option 3:{lesson.options[2]}</span>
        <span>Option 4:{lesson.options[3]}</span>
      </div>
      
    </div>
  )
}

export default QuestionC
