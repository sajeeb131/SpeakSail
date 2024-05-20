import React from 'react';
import { Link } from 'react-router-dom';
import './upNav.css'

const Navbar = ({ handleNavClick }) => {
  const handleClick = (formName) => {
    handleNavClick(formName);
  };

  return (
    <nav className='upNav'>
      <ul className='upUl'>
        <li className='UpLi'><Link to="/teachers/upload/uploadSD" className='linkss' onClick={() => handleClick('uploadSD')}>Sentence-Dictation</Link></li>
        <li className='UpLi'><Link to="/teachers/upload/uploadQA" className='linkss' onClick={() => handleClick('uploadQA')}>Q/A</Link></li>
        <li className='UpLi'><Link to="/teachers/upload/uploadST" className='linkss' onClick={() => handleClick('uploadST')}>Storytelling</Link></li>
        <li className='UpLi'><Link to="/teachers/upload/uploadPD" className='linkss' onClick={() => handleClick('uploadPD')}>Picture Description</Link></li>
        <li className='UpLi'><Link to="/teachers/upload/uploadC"  className='linkss' onClick={() => handleClick('uploadC')}>Comprehension</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
