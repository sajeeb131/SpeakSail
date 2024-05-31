// Evaluation.js
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './evaluation.css';
import AnswerPaper from './AnswerPaper';
import { useEvaluation } from '../../../contexts/EvaluationContext';

const Evaluation = () => {
  const {
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
  } = useEvaluation();

  return (
    <div className='container-evaluation'>
      <div className='evaluation-lesson'>

        {currentLesson && (
          <AnswerPaper
            type={type}
            currentLesson={currentLesson}
            category={category}
            type_convert={value2}
            typeUrl={typeUrl}
          />
        )}

        {!currentLesson && (
          <div className='evaluation-no-selected'>
            <h1>No Lessons Selected!</h1>
            <h2>Select A Lesson!</h2>
          </div>
        )}
      </div>
      <div className='evaluation-submissions'>
        <div className='evaluation-submissions-top'>
          <h1>Submissions</h1>
        </div>
        <div className='evaluation-submissions-bottom'>
          {lesson_types.map((object, index) => (
            <div
              key={index}
              className='submissions-section-indv'
              onClick={() => handleLessonTypeClick(object.lesson)}
            >
              {console.log('handleLessonTypeClick returns: ', selectedLesson )}
              <div className='submissions-section-indv-top'>
                <div className='letterbox'>
                  <h3>{object.lesson}</h3>
                  <span style={{ background: object.background }}>{object.type}</span>
                </div>
                <FiChevronRight size={30} />
              </div>
              {selectedLesson === object.lesson && lessons && (
                <div className='submissions-section-indv-drop'>
                  {lessons.map(
                    (object2, index) =>
                      (object2.feedback !== true && object2.feedback !== false) && (
                        <div
                          className='submissions-section-indv-drop-indv'
                          onClick={() =>
                            handleLessonClick(
                              object2,
                              object.lesson,
                              object.category,
                              object.value2,
                              object.typeUrl
                            )
                          }
                          key={index}
                        >
                          <span>
                            {console.log(object2)}
                            Lesson {object2.lessonNumber}: {object2.fullName}
                            {console.log(object2)}
                          </span>
                          <span>{object2.studentID}</span>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
