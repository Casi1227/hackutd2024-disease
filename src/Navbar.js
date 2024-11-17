import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left side: Circular container with logo and "GINKGO" */}
      <div className="logo-container" onClick={() => navigate('/dashboard')}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <span className="logo-text">GINKGO</span>
      </div>

      {/* Right side: Navigation buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/post')}>Post</button>
        <div className="profile-button" onClick={() => navigate('/profile')}>
          <img src="/profile.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
