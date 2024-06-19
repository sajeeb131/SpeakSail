import React, { useState } from 'react';
import UploadNavbar from '../../../components/upNav'
import { Link, useNavigate } from 'react-router-dom'

// Forms
import UploadSD from './Forms/UploadSD';
import UploadQA from './Forms/UploadQA';
import UploadST from './Forms/UploadST';
import UploadPD from './Forms/UploadPD';
import UploadC from './Forms/UploadC';
import UploadCE from './Forms/UploadCE';

import './UploadMain.css'

const UploadMain = ({submitType}) => {
  if(localStorage.getItem('lessonSubmitType')){
    submitType = localStorage.getItem('lessonSubmitType')
  }
  console.log(submitType)

      
  return (
    <div className='page-container'>
        
        <div className='content-beside-navbar2'>
            <div className='upperN'>
              <div className='upp'>
                <UploadNavbar />
              </div>
              {submitType=='uploadSD' && <UploadSD />}
              {submitType=='uploadQA' && <UploadQA />}
              {submitType=='uploadST' && <UploadST />}
              {submitType=='uploadPD' && <UploadPD />}
              {submitType=='uploadC' && <UploadC />}
              {submitType=='uploadCE' && <UploadCE />}

            </div>
            
        </div>
    </div>
  )
}

export default UploadMain