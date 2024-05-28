import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AiOutlineSound } from "react-icons/ai";

const QuestionQA = ({lesson}) => {
  console.log('inside qa section')
  console.log(lesson)
  return (
    <div>
      <div className='question-qa-audio'>
        <AudioPlayer className='question-player'
            src={lesson.audioFilePath}
            onPlay={e => console.log("onPlay")}
        />

      </div>
      <div className='question-qa-question'>
        <span>Question 1: {lesson.questions[0]}</span>
        <span>Question 1: {lesson.questions[1]}</span>
        <span>Question 1: {lesson.questions[2]}</span>
      </div>
      
  
    </div>
  )
}

export default QuestionQA
