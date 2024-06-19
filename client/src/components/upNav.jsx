import React from 'react';
import { Link } from 'react-router-dom';
import './upNav.css'

const Navbar = ({ submitType }) => {
  const handleClick = (type) => {
    localStorage.setItem('lessonSubmitType', type)
  };

  return (
    <nav className='upNav'>
      <ul className='upUl'>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadSD')}>Sentence-Dictation</Link></li>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadQA')}>Question/Answer</Link></li>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadST')}>Storytelling</Link></li>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadPD')}>Picture Description</Link></li>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadC')}>Comprehension</Link></li>
        <li className='UpLi'><Link  className='linkss' onClick={() => handleClick('uploadCE')}>Conversation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
