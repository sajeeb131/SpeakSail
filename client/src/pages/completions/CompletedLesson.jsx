import React, { useEffect, useState } from 'react';
import './completions.css';
import QuestionSD from './questions/QuestionSD';
import QuestionQA from './questions/QuestionQA';
import QuestionPD from './questions/QuestionPD';
import QuestionST from './questions/QuestionST';
import QuestionC from './questions/QuestionC';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'



const CompletedLesson = ({ lesson }) => {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState('');
  const [lessonType, setLessonType] = useState('');
  const [lessonNumber, setLessonNumber] = useState(lesson.lessonNumber);

  useEffect(() => {
    const determineLessonType = () => {
      switch (lesson.type) {
        case 'Sentence Dictation':
          setCategory('listening');
          setLessonType('sentence-dictation');
          break;
        case 'Question Answer':
          setCategory('listening');
          setLessonType('qa');
          break;
        case 'Picture Description':
          setCategory('writing');
          setLessonType('picturedescription');
          break;
        case 'Comprehension':
          setCategory('reading');
          setLessonType('comprehension');
          break;
        case 'Storytelling':
          setCategory('speaking');
          setLessonType('storytelling');
          break;
        default:
          break;
      }
    };

    const fetchData = async () => {
      try {
        determineLessonType();
        if (category && lessonType && lessonNumber) {
          const response = await fetch(`http://localhost:4000/lessons/${category}/${lessonType}/${lessonNumber}`);
          if (!response.ok) {
            throw new Error('Cannot fetch lessons data!');
          }
          const data = await response.json();
          setQuestion(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [category, lessonType, lessonNumber, lesson.type]);

  if (!question) {
    return <div>...Loading</div>;
  }

  return (
    <div className='container-completed-lessons'>
      <div className='completed-lesson-main'>
        <div className='completed-lesson-type'>
          <h4>{lesson.type}</h4>
        </div>
        <div className='completed-lesson-question'>
          {lesson.type === 'Sentence Dictation' && <QuestionSD lesson={question} />}
          {lesson.type === 'Question Answer' && <QuestionQA lesson={question} />}
          {lesson.type === 'Storytelling' && <QuestionST lesson={question} />}
          {lesson.type === 'Comprehension' && <QuestionC lesson={question} />}
          {lesson.type === 'Picture Description' && <QuestionPD lesson={question} />}
        </div>
        {['Sentence Dictation', 'Comprehension', 'Picture Description'].includes(lesson.type) && (
          <div className='completed-lesson-answer'>
            <h4>Answers: <span>{lesson.answers}</span></h4>
          </div>
        )}
        {['Storytelling'].includes(lesson.type) && (
          <div className='completed-lesson-answer'>
            <AudioPlayer 
                src={lesson.audioFilePath}
            />

          </div>
        )}
        {['Question Answer'].includes(lesson.type) && (
          
            <div className='completed-lesson-answer'>
                <h4>Answers 1: <span>{lesson.answers[0]}</span></h4>
                <h4>Answers 2: <span>{lesson.answers[1]}</span></h4>
                <h4>Answers 3: <span>{lesson.answers[2]}</span></h4>
            </div>

        )}
      </div>
    </div>
  );
};

export default CompletedLesson;
