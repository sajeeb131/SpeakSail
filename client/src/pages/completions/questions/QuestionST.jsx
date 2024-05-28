import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'


const QuestionST = ({lesson}) => {
  return (
    <div className='question-storytelling-story'>
      <h4 >{lesson.story}</h4>
    </div>
  )
}

export default QuestionST
