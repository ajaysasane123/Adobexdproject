import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aj.css';

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={() => navigate('/create-account')}>Create Account</button>
      <button onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
}

export default Welcome;
