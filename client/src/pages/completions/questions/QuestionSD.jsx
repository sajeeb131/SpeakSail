import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AiOutlineSound } from "react-icons/ai";
import '../../listening/AudioPlayer.css'

const QuestionSD = ({lesson}) => {
  console.log(lesson)
  return (
    <div>
      <AudioPlayer className='question-player'
        autoPlay
        src={lesson}
        onPlay={e => console.log("onPlay")}
      />

    </div>
  )
}

export default QuestionSD
