import React from 'react'

const Submission = ({lesson_types, selectedLesson, lessons }) => {
  return (
    <div>
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
  )
}

export default Submission
