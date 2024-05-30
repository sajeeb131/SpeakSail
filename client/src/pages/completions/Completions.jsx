import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CompletedLesson from './CompletedLesson';
import './completions.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Completions = () => {
  const studentID = localStorage.getItem('user');
  const navigate = useNavigate()
  {!studentID && navigate('/')}

  
  const [lessons, setLessons] = useState({
    sd_lessons_ans: [],
    qa_lessons_ans: [],
    pd_lessons_ans: [],
    comprehension_lessons_ans: [],
    storytelling_lessons_ans: []
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState(null); // Track the selected lesson
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/home/completed-lessons/${studentID}`);
        if (!response.ok) {
          throw new Error('Can not fetch completed lessons data!');
        }
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [studentID]);

  const allLessons = [
    ...lessons.sd_lessons_ans.map(lesson => ({ ...lesson, type: 'Sentence Dictation' })),
    ...lessons.qa_lessons_ans.map(lesson => ({ ...lesson, type: 'Question Answer' })),
    ...lessons.pd_lessons_ans.map(lesson => ({ ...lesson, type: 'Picture Description' })),
    ...lessons.comprehension_lessons_ans.map(lesson => ({ ...lesson, type: 'Comprehension' })),
    ...lessons.storytelling_lessons_ans.map(lesson => ({ ...lesson, type: 'Storytelling' }))
  ];

  const totalItems = allLessons.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allLessons.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleLessonClick = lesson => {
    setSelectedLesson(lesson);
  };

  const handleBackClick = () => {
    setSelectedLesson(null);
  };

  return (
    <div>
      <Navbar />
      <div className='container-completions'>
        {selectedLesson ? (
          <div className='completions-main'>
              <div className='completions-header'>
                <h1>Completed <span>Activities</span></h1>
              </div>
            <div className='completed-lesson-container'>
              <CompletedLesson lesson={selectedLesson} />
              <button className='back-button' onClick={handleBackClick}>Back</button>
            </div>
          </div>
        ) : (
          <>
            <div className='completions-main completions-main2'>
              <div className='completions-header'>
                <h1>Completed <span>Activities</span></h1>
              </div>
              <div className='completions-grid'>
                {currentItems.map(lesson => (
                  <div key={lesson._id} className='completions-lessons-box' onClick={() => handleLessonClick(lesson)}>
                    <h4>{lesson.type}</h4>
                    <span>Lesson number: {lesson.lessonNumber}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='pagination'>
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                <FiChevronLeft size={40} color='#002E88' />
              </button>
              
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FiChevronRight size={40} color='#002E88' />
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Completions;
