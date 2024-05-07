import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './waveform.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
const Waveform = ({ audioUrl }) => {
  const [playing, setPlaying] = useState(false);
  const waveSurferRef = useRef(null);

  useEffect(() => {
    const wavesurfer = waveSurferRef.current;

    const initializeWaveSurfer = () => {
      if (!wavesurfer) {
        waveSurferRef.current = WaveSurfer.create({
          container: '#waveform',
          cursorWidth: 0,
          height: 100, // Set the height of the container div
          barHeight: 10, // Adjust the height of the waveform bars
          hideScrollbar: true,
          progressColor: '#002E88',
          responsive: true,
          waveColor: '#FABC2A',
          normalize: true,
        });
      }
    };

    initializeWaveSurfer();

    // Load new audio URL when it changes
    if (wavesurfer) {
      wavesurfer.load(audioUrl);
    }

    return () => {
      // Pause playback and clear the audio URL when the component unmounts
      if (wavesurfer) {
        wavesurfer.pause();
        wavesurfer.empty();
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    const wavesurfer = waveSurferRef.current;
    if (wavesurfer) {
      if (playing) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
      setPlaying(!playing);
    }
  };
  

  return (
    <div className="audio-player">
      <button onClick={togglePlay}>{playing ? <AiOutlinePauseCircle size={34} color='#002E88'/> : <AiOutlinePlayCircle size={34} color='#002E88'/>}</button>
      <div id="waveform"></div>
      
    </div>
  );
};

export default Waveform;
