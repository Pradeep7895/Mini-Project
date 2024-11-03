// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component }) {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;


