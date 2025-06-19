import React from 'react';
import './Aj.css';

function AccountSettings() {
  return (
    <div className="container">
      <h2>Account Settings</h2>
      <div className="card card-flex">
        <div className="avatar-section">
          <img src="https://via.placeholder.com/80" alt="Profile" />
          <div className="camera-icon">📷</div>
        </div>
        <div className="info">
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
        Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default AccountSettings;