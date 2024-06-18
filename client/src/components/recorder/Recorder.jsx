import React, { useState, useRef } from 'react';
import { FaMicrophoneAlt } from "react-icons/fa";
import './recorder.css';
import Waveform from '../wavesurfer/Waveform';

const Recorder = ({ onRecordingStop }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorder = useRef(null);
  const buttonRef = useRef(null); // Ref for the button
  const chunks = useRef([]);

  const startRecording = () => {
    setIsRecording(true);
    chunks.current = []; // Clear the previous recording chunks
    if (buttonRef.current) {
      buttonRef.current.classList.add('button-stop');
    }
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = e => {
          chunks.current.push(e.data);
        };
        mediaRecorder.current.onstop = () => {
          const blob = new Blob(chunks.current, { type: 'audio/wav' });
          const url = URL.createObjectURL(blob);
          setAudioUrl(url);
          if (onRecordingStop) {
            onRecordingStop(blob); // Call the callback with the recorded audio blob
          }
        };
        mediaRecorder.current.start();
      })
      .catch(error => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (buttonRef.current) {
      buttonRef.current.classList.remove('button-stop');
    }
    mediaRecorder.current.stop();
  };

  return (
    <div className='player-container'>
      <div className='button-container'>
        <button
          ref={buttonRef} // Attach the ref to the button
          className='button-record'
          onClick={isRecording ? stopRecording : startRecording}
        >
          <FaMicrophoneAlt />
          {isRecording ? ' Stop ' : 'Start'}
        </button>
      </div>
      {audioUrl && (
        <div className='player'>
          <Waveform audioUrl={audioUrl} reload={true} />
        </div>
      )}
    </div>
  );
};

export default Recorder;
