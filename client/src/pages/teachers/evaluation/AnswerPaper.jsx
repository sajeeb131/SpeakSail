import React, { useEffect, useState } from 'react';
import { FiXCircle, FiCheckCircle } from 'react-icons/fi';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AnswerPaper = ({ type, currentLesson, category, type_convert, typeUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('pending');
  const [student, setStudent] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('pending');
        const response = await fetch(`http://localhost:4000/student/${currentLesson.studentID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch student data!');
        }
        const data = await response.json();
        setStudent(data);

        if (type === 'Storytelling') {
          setAudioUrl(currentLesson.audioFilePath);
        }
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentLesson, category, type]);

  const handleSubmit = async (action) => {
    if (student) {
      try {
        setIsLoading(true);

        let value1 = student[category];
        let value2 = student[type_convert];
        const { _id, studentID, lessonNumber } = currentLesson;
        const feedback = action === 'approve' ? 'true' : 'false';
        let message = '';

        if (feedback === 'true') {
          message = 'has been approved.';
          value1++;
          value2++;
        } else {
          message = 'has been declined.';
        }

        const response = await fetch(`http://localhost:4000/lessons/${category}/${typeUrl}/${_id}`, {
          method: 'PATCH',
          body: JSON.stringify({ feedback, lessonNumber, studentID, value1, value2 }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setStatus(feedback ? 'true' : 'false');
          console.log('Feedback submitted successfully:', data);
        } else {
          throw new Error('Feedback submission failed!');
        }

        const notification = { studentID, type, lessonNumber, message };
        console.log(notification);

        const response2 = await fetch(`http://localhost:4000/notifications`, {
          method: 'POST',
          body: JSON.stringify(notification),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response2.ok) {
          throw new Error('Cannot save notification data!');
        } else {
          console.log('Notification sent successfully');
        }
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading || !currentLesson || !student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='evaluation-main'>
        <div className='evaluation-lesson-top'>
          <div className='evaluation-lesson-top-header'>
            <h1>{type}</h1>
            <h2>Lesson {currentLesson.lessonNumber}</h2>
          </div>
          <h3>{student.fullName}</h3>
          <h5>ID: {currentLesson.studentID}</h5>
        </div>
        <div className='evaluation-lesson-mid-container'>
          {['Sentence Dictation', 'Question Answer', 'Comprehension', 'Picture Description'].includes(type) && (
            <div className='evaluation-lesson-mid'>
              <p>Answer: <span>{currentLesson.answers}</span></p>
            </div>
          )}
          {type === 'Storytelling' && audioUrl && (
            <div className='evaluation-lesson-mid-audio'>
              <AudioPlayer src={audioUrl} onPlay={() => console.log("onPlay")} />
            </div>
          )}
        </div>
        <div className='evaluation-hidden-status'>
          {status === 'true' && <div><FiCheckCircle size={100} color='#93FF96' /></div>}
          {status === 'false' && <div><FiXCircle size={100} color='#FF5E5B' /></div>}
        </div>
      </div>
      {status === 'pending' && (
        <div className='evaluation-lesson-bottom'>
          <button className='evaluation-btn-approve' style={{ backgroundColor: '#93FF96' }} onClick={() => handleSubmit('approve')}>
            Approve
          </button>
          <button className='evaluation-btn-decline' style={{ backgroundColor: '#FF5E5B' }} onClick={() => handleSubmit('decline')}>
            Decline
          </button>
        </div>
      )}
    </div>
  );
};

export default AnswerPaper;
