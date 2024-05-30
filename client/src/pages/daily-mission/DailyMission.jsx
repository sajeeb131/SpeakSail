import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './DailyMission.css';

const DailyMission = () => {
  const userID = localStorage.getItem('user');
  const [currentQuestionSet, setCurrentQuestionSet] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [student, setStudent] = useState(null)
  const [error, setError] = useState(null)

  const fetchDailyQuestions = async (skip = false) => {
    if(userID){
      console.log(userID)
      try {
        const response = await fetch(`http://localhost:4000/extras/daily-mission/${userID}${skip ? '?skip=true' : ''}`);
        console.log(`http://localhost:4000/extras/daily-mission/${userID}${skip ? '?skip=true' : ''}`)
        if (!response.ok) {
          throw new Error('Failed to fetch daily questions');
        }
        const data = await response.json();
        setCurrentQuestionSet(data.currentQuestionSet);
        setUserAnswers(new Array(data.currentQuestionSet.question.length).fill(''));
      } catch (error) {
        console.error(error.message);
      }
    }
    
  };

  useEffect(() => {
    fetchDailyQuestions();
  }, []);

  

  useEffect(() => {
    if (userAnswers.every(answer => answer.trim() !== '')) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }, [userAnswers]);

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = async () => {
    const isCorrect = currentQuestionSet.answer.every((ans, index) => ans === userAnswers[index]);
    if (isCorrect) {
      try {
        const response = await fetch('http://localhost:4000/student/update-streak', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userID: userID, streakIncrement: 1, missionCompleted: true }),
        });
        if (!response.ok) {
          throw new Error('Failed to update user streak');
        }

        // Update student state with the new streak value and mission completed status
        setStudent(prevStudent => ({
          ...prevStudent,
          streak: prevStudent.streak + 1,
          daily_mission_completed: true,
        }));

      } catch (error) {
        console.error(error);
      }
    } else {
      setError('Wrong Answers!!!')
    }
  };

  const handleSkip = async () => {
    await fetchDailyQuestions(true);

    try {
      const response = await fetch('http://localhost:4000/student/update-streak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: userID, streakIncrement: 0, missionCompleted: false }),
      });
      console.log('inside skip');
      if (!response.ok) {
        throw new Error('Failed to reset user streak');
      }

      // Update student state with the new streak value
      setStudent(prevStudent => ({
        ...prevStudent,
        streak: 0
      }));

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    const fetchStudent = async()=>{
      try{
        const response0 = await fetch(`http://localhost:4000/student/${userID}`);
        if(!response0.ok) { throw new Error('Can not retrieve student information!') }
        const info = await response0.json();
        setStudent(info)
      
      }catch(error){
        console.log(error.message)
      }
    }
    fetchStudent()
  },[currentQuestionSet])

  if (!currentQuestionSet || !student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily-mission">
      <Navbar />
      <div className="lesson-heading">
        <div className="heading">
          <div className="daily-heading">
            <h2 className="daily">Daily</h2>
          </div>
          <div className="mission-heading">
            <div className="mission">Mission</div>
          </div>
        </div>
      </div>

      <div className="main-section">
        {student.daily_mission_completed ? (
          <div className="congrats-message">
            <h2>Congratulations!</h2>
            <p>You have completed today's mission.</p>
          </div>
        ) : (
          <>
            <div className="task-instruction">
              <h4>Complete the following sentences by using the correct word.</h4>
            </div>

            <div className="answer-options-box">
              {currentQuestionSet.options.map((option, optIndex) => (
                <span className="answer-option" key={optIndex}>{option}</span>
              ))}
            </div>

            <div className="question-set">
              <div className="questions">
                {currentQuestionSet.question.map((question, qIndex) => (
                  <p key={qIndex}>
                    {qIndex + 1}. {question.split('____')[0]}
                    <input
                      type="text"
                      name={`answer-${qIndex}`}
                      id={`answer-${qIndex}`}
                      value={userAnswers[qIndex]}
                      onChange={(e) => handleInputChange(qIndex, e.target.value)}
                    />
                    {question.split('____')[1]}
                  </p>
                ))}
              </div>
              {error && <div className='daily-mission-error'>{error}</div>}
            </div>
          </>
        )}
      </div>

      <div className="submission-buttons">
        {!student.daily_mission_completed && <button className="skip-button" onClick={handleSkip}>Skip</button>}
        {!student.daily_mission_completed && <div className='daily-mission-streak'>Streak <span >{student.streak}</span></div>}
        {!student.daily_mission_completed && <button className="submit-button" onClick={handleSubmit} disabled={!isSubmitEnabled}>Submit</button>}
      </div>
      <Footer />
    </div>
  );
};

export default DailyMission;
