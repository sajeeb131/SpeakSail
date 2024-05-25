import React, { useEffect, useState } from 'react';
import { FiHelpCircle, FiXCircle, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import './evaluation.css';
import EvaluationSentenceDictation from './AnswerPaper';
import AnswerPaper from './AnswerPaper';


const Evaluation = () => { 
  
  const [selectedLesson, setSelectedLesson] = useState('');
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState('')
  const [type, setType] = useState()
  const [category, setCategory] = useState()
  const [value2, setValue2] = useState()
  const [typeUrl, setTypeUrl] = useState()
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
      value2: 'speaking',
      typeUrl: 'storytelling',
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
  const handleLessonClick = (lesson, type, category,value2,typeUrl) =>{
    setCurrentLesson(lesson)
    setType(type)
    setCategory(category)
    setValue2(value2)
    setTypeUrl(typeUrl)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';
        if(selectedLesson === 'Sentence Dictation') {
          url = 'http://localhost:4000/lessons/listening/sentence-dictation/answer/all';
        } else if(selectedLesson === 'Question Answer') {
          url = 'http://localhost:4000/lessons/listening/qa/answer/all';
        } else if(selectedLesson === 'Storytelling') {
          url = 'http://localhost:4000/lessons/speaking/storytelling/answer/all';
        } else if(selectedLesson === 'Picture Description') {
          url = 'http://localhost:4000/lessons/writing/picturedescription/answer/all';
        } else if(selectedLesson === 'Comprehension') {
          url = 'http://localhost:4000/lessons/reading/comprehension/answer/all';
        } else if(selectedLesson === 'Story Boarding') {
          url = 'http://localhost:4000/lessons/reading/storyboarding/answer/all';
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
    }
    if (selectedLesson) {
      fetchData();
    }
  }, [selectedLesson]);



  return (
    <div className='container-evaluation'>
      <div className='evaluation-lesson'>
        {currentLesson  && <AnswerPaper type = {type} currentLesson = {currentLesson} category={category} type_convert={value2} typeUrl ={typeUrl}/>}
        
        {!currentLesson && <div className='evaluation-no-selected'>
            <h1>No Lessons Selected!</h1>
            <h2>Select A Lesson!</h2>

           </div>}
        
        
      </div>
      <div className='evaluation-submissions'>
        <div className='evaluation-submissions-top'>
          <h1>Submissions</h1>
        </div>
        <div className='evaluation-submissions-bottom'>
          {lesson_types.map((object, index) => (
            <div key={index} className='submissions-section-indv' onClick={() => handleLessonTypeClick(object.lesson)}>
              <div className='submissions-section-indv-top'>
                <div className='letterbox'>
                  <h3>{object.lesson}</h3>
                  <span style={{background: object.background}}>{object.type}</span>
                </div>
                <FiChevronRight size={30}/>
              </div>
              {selectedLesson === object.lesson && lessons &&
                
                <div className='submissions-section-indv-drop'>
                    {lessons.map((object2, index) => (
                      object2.feedback !== true && (
                        <div 
                          className='submissions-section-indv-drop-indv' 
                          onClick={() => handleLessonClick(object2, object.lesson, object.category, object.value2, object.typeUrl)}
                          key={index}  
                        >
                          <span>Lesson {object2.lessonNumber}: {object2.studentName}</span>
                          <span>{object2.studentID}</span>
                        </div>
                      )
                    ))}
 
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
