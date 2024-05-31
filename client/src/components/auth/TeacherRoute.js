// TeacherRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const TeacherRoute = ({ element }) => {
    const userId = localStorage.getItem('user');
  const userType = localStorage.getItem('user_type');

  if (!userId) {
    return <Navigate to="/" />;
  }
  if (userType !== 'teacher') {
    return <Navigate to="/403" />;
}

  return element;
};

export default TeacherRoute;
