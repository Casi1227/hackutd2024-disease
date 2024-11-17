import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      <input type="text" placeholder="Search..." className="search-bar" />
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/post')}>Post</button>
    </nav>
  );
};

export default Navbar;
