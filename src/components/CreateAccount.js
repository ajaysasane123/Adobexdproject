import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aj.css';

function CreateAccount() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/settings');
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Phone number" required />
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Company name" required />
        <div className="radio-group">
          <label>Are you an Agency?</label>
          <label><input type="radio" name="agency" /> Yes</label>
          <label><input type="radio" name="agency" /> No</label>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;

