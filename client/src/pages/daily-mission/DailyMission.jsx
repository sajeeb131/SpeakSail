import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './DailyMission.css';

const DailyMission = () => {
  const [currentQuestionSet, setCurrentQuestionSet] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  useEffect(() => {
    const fetchDailyQuestions = async () => {
      try {
        const response = await fetch('http://localhost:4000/extras/daily-mission');
        if (!response.ok) {
          throw new Error('Failed to fetch daily questions');
        }
        const data = await response.json();
        setCurrentQuestionSet(data.currentQuestionSet);
        setUserAnswers(new Array(data.currentQuestionSet.question.length).fill(''));
        console.log(userAnswers)
        console.log(data.congratsShown)
        setShowCongrats(data.congratsShown);
        if(!showCongrats){
          localStorage.setItem('congratsTimer','false')
        } // Reset congrats message when new questions are fetched
        console.log(showCongrats)
      } catch (error) {
        console.error(error);
      }
    };

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
      console.log('it is true')
      setShowCongrats(true);
      localStorage.setItem('congratsTimer', 'true'); // Set timer value when congratulations message is shown
    } else {
      alert('Some answers are incorrect. Please try again.');
    }
  };

  const handleSkip = async () => {
    const response = await fetch('http://localhost:4000/extras/daily-mission');
    if (!response.ok) {
      throw new Error('Failed to fetch daily questions');
    }
    const data = await response.json();
    setCurrentQuestionSet(data);
    setUserAnswers(new Array(data.question.length).fill(''));
    setShowCongrats(false); // Reset congrats message if skipping
    localStorage.removeItem('congratsTimer'); // Remove timer value when skipping
  };

  if (!currentQuestionSet) {
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

      {/* Main Section */}
      <div className="main-section">
        {localStorage.getItem('congratsTimer') =='true' ? (
          <div className="congrats-message">
            <h2>Congratulations!</h2>
            <p>You have answered all questions correctly.</p>
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
            </div>
          </>
        )}
      </div>

      <div className="submission-buttons">
        {!showCongrats && <button className="skip-button" onClick={handleSkip}>Skip</button>}
        {!showCongrats && <button className="submit-button" onClick={handleSubmit} disabled={!isSubmitEnabled}>Submit</button>}
      </div>
      <Footer />
    </div>
  );
};

export default DailyMission;
