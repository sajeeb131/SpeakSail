import React, { useEffect } from 'react';
import './popUp.css';
import { AiFillCheckCircle } from "react-icons/ai";

const SubmissionPopup = ({ showPopup, onClose }) => {
    useEffect(() => {
        const closePopup = () => {
            onClose();
        };

        document.addEventListener('click', closePopup);

        return () => {
            document.removeEventListener('click', closePopup);
        };
    }, [onClose]);

    useEffect(() => {
        const popup = document.querySelector('.submission-popup');
        if (showPopup && popup) {
            popup.classList.remove('inactive'); // Remove inactive class to show the popup
        } else if (!showPopup && popup) {
            popup.classList.add('inactive'); // Add inactive class to hide the popup
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
