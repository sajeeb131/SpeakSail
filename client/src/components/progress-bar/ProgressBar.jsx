import React from 'react'
import { useState } from 'react';
import './style.css'

const ProgressBar = (props) => {
    const [progress, setProgress] = useState(props.progress);
    const progressStyle = {
        width: `${progress}%`
    };
    
    const incrementProgress = () => {
        setProgress(progress + 0);
    };
  return (
    <div>
      <div className='container-pb-main'>
        <div className='container-pb-line'style={progressStyle}></div>
      </div>
    </div>
  )
}

export default ProgressBar
