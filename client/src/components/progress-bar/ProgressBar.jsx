import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {MdClose} from 'react-icons/md'
import './style.css'

const ProgressBar = (props) => {
    const navigate = useNavigate();

    const [progress, setProgress] = useState(props.progress);
    const progressStyle = {
        width: `${progress}%`
    };

    const handleCloseClick = ()=>{
      navigate(-1);
    }
    
    const incrementProgress = () => {
        setProgress(progress + 0);
    };
  return (
    <div className='container-pbar'>
      <Link onClick={handleCloseClick}><MdClose size={28}/></Link>
      <div className='container-pb-main'>
        <div className='container-pb-line'style={progressStyle}></div>
      </div>
    </div>
  )
}

export default ProgressBar
