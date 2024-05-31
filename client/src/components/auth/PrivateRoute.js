// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {

  const userId = localStorage.getItem('user');
  const userType = localStorage.getItem('user_type'); 

  if (!userId) {
    return <Navigate to="/" />;
  }

  if (userType !== 'student') {
    return <Navigate to="/403" />; 
  }

  return element;
};

export default PrivateRoute;
