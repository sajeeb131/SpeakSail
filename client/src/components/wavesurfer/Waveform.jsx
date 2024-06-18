import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './waveform.css';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Waveform = ({ audioUrl }) => {
  const [playing, setPlaying] = useState(false);
  const waveSurferRef = useRef(null);
  const containerRef = useRef(null); // Reference for the container div
  const [uniqueId] = useState(`waveform-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (!containerRef.current) return;

    waveSurferRef.current = WaveSurfer.create({
      container: `#${uniqueId}`,
      cursorWidth: 0,
      height: 70,
      barHeight: 10,
      hideScrollbar: true,
      progressColor: '#002E88',
      responsive: true,
      waveColor: '#FABC2A',
      normalize: true,
    });

    if (audioUrl) {
      waveSurferRef.current.load(audioUrl);
    }

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, [audioUrl, uniqueId]);

  const togglePlay = () => {
    if (waveSurferRef.current) {
      if (playing) {
        waveSurferRef.current.pause();
      } else {
        waveSurferRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="audio-player">
      <button onClick={togglePlay}>
        {playing ? <AiOutlinePauseCircle size={34} color='#002E88' /> : <AiOutlinePlayCircle size={34} color='#002E88' />}
      </button>
      <div className='waveform' id={uniqueId} ref={containerRef}></div>
    </div>
  );
};

export default Waveform;
