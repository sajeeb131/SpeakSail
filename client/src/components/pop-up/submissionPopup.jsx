import React, { useEffect, useCallback } from 'react';
import './popUp.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SubmissionPopup = ({ showPopup, onClose }) => {
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        onClose();
        navigate(-1); // Navigate to the previous page
    }, [onClose, navigate]);

    useEffect(() => {
        if (showPopup) {
            document.addEventListener('click', handleClose);
        }

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [showPopup, handleClose]);

    useEffect(() => {
        const popup = document.querySelector('.submission-popup');
        if (showPopup && popup) {
            popup.classList.remove('inactive');
        } else if (!showPopup && popup) {
            popup.classList.add('inactive');
        }
    }, [showPopup]);

    return (
        <>
            {showPopup && (
                <div className='submission-pop-container'>
                    <div className="popup-backdrop"></div>
                    <div className='submission-popup'>
                        <AiFillCheckCircle color="white" size={120} />
                        <p>Submitted</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default SubmissionPopup;
