// EvaluationContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const EvaluationContext = createContext();

// Hook to use the context values
export const useEvaluation = () => useContext(EvaluationContext);

// Evaluation Provider component
export const EvaluationProvider = ({ children }) => {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState('');
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [value2, setValue2] = useState();
  const [typeUrl, setTypeUrl] = useState();
  
  const lesson_types = [
    {
      lesson: 'Sentence Dictation',
      category: 'listening',
      value2: 'sentence_dictation',
      typeUrl: 'sentence-dictation',
      type: 'L',
      background: '#52D1DC'
    },
    {
      lesson: 'Question Answer',
      category: 'listening',
      value2: 'question_answer',
      typeUrl: 'qa',
      type: 'L',
      background: '#52D1DC'
    },
    {
      lesson: 'Comprehension',
      category: 'reading',
      value2: 'comprehension',
      typeUrl: 'comprehension',
      type: 'R',
      background: '#93FF96'
    },
    {
      lesson: 'Storytelling',
      category: 'speaking',
      value2: 'storytelling',
      typeUrl: 'storytelling',
      type: 'S',
      background: '#FABC2A'
    },
    {
      lesson: 'Conversation Exchange',
      category: 'speaking',
      value2: 'conversation_exchange',
      typeUrl: 'conversation-exchange',
      type: 'S',
      background: '#FABC2A'
    },
    {
      lesson: 'Picture Description',
      category: 'writing',
      value2: 'picture_description',
      typeUrl: 'picturedescription',
      type: 'W',
      background: '#FF5E5B'
    },
  ];

  const handleLessonTypeClick = (lesson) => {
    setSelectedLesson(prevLesson => prevLesson === lesson ? '' : lesson);
  };

  const handleLessonClick = (lesson, type, category, value2, typeUrl) => {
    setCurrentLesson(lesson);
    setType(type);
    setCategory(category);
    setValue2(value2);
    setTypeUrl(typeUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';
        switch (selectedLesson) {
          case 'Sentence Dictation':
            url = 'http://localhost:4000/lessons/listening/sentence-dictation/answer/all';
            break;
          case 'Question Answer':
            url = 'http://localhost:4000/lessons/listening/qa/answer/all';
            break;
          case 'Storytelling':
            url = 'http://localhost:4000/lessons/speaking/storytelling/answer/all';
            break;
          case 'Conversation Exchange':
            url = 'http://localhost:4000/lessons/speaking/conversation-exchange/answer/all';
            break;
          case 'Picture Description':
            url = 'http://localhost:4000/lessons/writing/picturedescription/answer/all';
            break;
          case 'Comprehension':
            url = 'http://localhost:4000/lessons/reading/comprehension/answer/all';
            break;
          case 'Story Boarding':
            url = 'http://localhost:4000/lessons/reading/storyboarding/answer/all';
            break;
          default:
            break;
        }

        if (url) {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Can\'t fetch lessons!');
          }
          const lessonData = await response.json();
          setLessons(lessonData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (selectedLesson) {
      fetchData();
    }
  }, [selectedLesson]);

  return (
    <EvaluationContext.Provider
      value={{
        lesson_types,
        lessons,
        selectedLesson,
        currentLesson,
        type,
        category,
        value2,
        typeUrl,
        handleLessonTypeClick,
        handleLessonClick,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  );
};
