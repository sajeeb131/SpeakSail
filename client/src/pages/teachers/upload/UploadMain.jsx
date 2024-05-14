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


import './UploadMain.css'

const UploadMain = () => {
    const [initial , setInitial] = useState(true)
    const [activeForm, setActiveForm] = useState(); // useState for activeForm

    const handleNavClick =  (formName) => {
      setInitial(false)
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
          default:
            return null;
        }
      };

      
  return (
    <div className='page-container'>
        
        <div className='content-beside-navbar2'>
            <div className='upperN'>
                {initial && <UploadSD />}
            </div>
            
        </div>
    </div>
  )
}

export default UploadMain