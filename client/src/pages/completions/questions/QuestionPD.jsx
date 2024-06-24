import React from 'react'

const QuestionPD = ({lesson}) => {
  return (
    <div>
      {console.log(lesson)}
      <img src={lesson.imagePath} alt="" width='300px' height='200px'/>
    </div>
  )
}

export default QuestionPD
