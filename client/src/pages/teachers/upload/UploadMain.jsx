import React, { useState } from 'react';
import Navbar from '../../../components/teacherNav'
import UploadNavbar from '../../../components/upNav'
import { Link, useNavigate } from 'react-router-dom'

// Forms
import UploadSD from './Forms/UploadSD';
import UploadQA from './Forms/UploadQA';
import UploadST from './Forms/UploadST';
import UploadPD from './Forms/UploadPD';
import UploadC from './Forms/UploadC';
import UploadDS from './Forms/UploadDS';

const UploadMain = () => {
    const [activeForm, setActiveForm] = useState(); // useState for activeForm

    const handleNavClick = (formName) => {
      setActiveForm(formName);
    };

    const renderForm = () => {
        switch (activeForm) {
          case 'uploadSD':
            return <UploadSD />;
          case 'uploadQA':
            return <UploadQA />;
          case 'uploadST':
            return <UploadST />;
          case 'uploadPD':
            return <UploadPD />;
          case 'uploadC':
            return <UploadC />;
          case 'uploadDS':
            return <UploadDS />;
          default:
            return null;
        }
      };
  return (
    <div className='page-container'>
        <div className="navbar-container">
            <Navbar/>
        </div>
        <div className='content-beside-navbar'>
            <div className='upperN'>
                <UploadNavbar handleNavClick={handleNavClick}/>
            </div>
            <div className='lowerN'>
                {/* Render the form based on activeForm */}
                {renderForm()}
            </div>
        </div>
    </div>
  )
}

export default UploadMain