// src/components/RentalForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function RentalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState('');
  const [details, setDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://127.0.0.1:5000/rental',
        { name, email, property, details },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Form submitted successfully');
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'Form submission failed.');
    }
  };

  return (
    <div className="container">
      <h2>Rental Property Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Property Address" value={property} onChange={(e) => setProperty(e.target.value)} required />
        <textarea placeholder="Additional Details" value={details} onChange={(e) => setDetails(e.target.value)} required></textarea>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default RentalForm;


