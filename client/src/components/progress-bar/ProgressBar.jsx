import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {MdClose} from 'react-icons/md'
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
    <div className='container-pbar'>
      <Link><MdClose size={28}/></Link>
      <div className='container-pb-main'>
        <div className='container-pb-line'style={progressStyle}></div>
      </div>
    </div>
  )
}

export default ProgressBar
