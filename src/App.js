import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;