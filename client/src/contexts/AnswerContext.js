import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AnswerContext = createContext();

// Hook to use the context values
export const useAnswer = () => useContext(AnswerContext);

// Answer Provider component
export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnswers = async () => {
    setLoading(true);
    setError(null);
    const routes = [
      'http://localhost:4000/lessons/listening/sentence-dictation/answer/all',
      'http://localhost:4000/lessons/listening/qa/answer/all',
      'http://localhost:4000/lessons/speaking/storytelling/answer/all',
      'http://localhost:4000/lessons/writing/picturedescription/answer/all',
      'http://localhost:4000/lessons/reading/comprehension/answer/all',
      'http://localhost:4000/lessons/speaking/conversation-exchange/answer/all'
    ];

    try {
        const responses = await Promise.all(routes.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));
  
        // Flatten the array of arrays
        const allAnswers = data.flat();

  
        setAnswers(allAnswers);
      } catch (err) {
        setError('Failed to fetch answers');
        console.error(err);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  useEffect(() => {
  }, [answers]); // Add 'answers' as a dependency to the useEffect hook

  return (
    <AnswerContext.Provider value={{ answers, loading, error, fetchAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
