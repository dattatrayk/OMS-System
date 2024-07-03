import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>My App</h1>
        <div className="user-info">
          <span>Welcome, {email}</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
