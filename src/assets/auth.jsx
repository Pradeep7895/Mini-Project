// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import RentalForm from './RentalForm';
import PrivateRoute from './PrivateRoute';
import './App.css';

function Auth() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rental" element={<PrivateRoute component={RentalForm} />} />
      </Routes>
    </Router>
  );
}

export default Auth;

