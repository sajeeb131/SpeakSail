import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EvaluationProvider } from './contexts/EvaluationContext';
import { AnswerProvider } from './contexts/AnswerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EvaluationProvider>
    <AnswerProvider>
      <App />
    </AnswerProvider>
  </EvaluationProvider>
);
