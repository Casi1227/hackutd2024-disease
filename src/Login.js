import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      {/* Left Content Section */}
      <div className="login-content">
        {/* Header with Logo */}
        <div className="login-header">
          <div className="logo-frame">
            <img src="logo.png" alt="Logo" className="logo-image" />
          </div>
          <h2 className="login-heading">Login</h2>
        </div>

        {/* Username Input */}
        <div className="login-field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="login-input"
          />
        </div>

        {/* Password Input */}
        <div className="login-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="login-input"
          />
        </div>

        {/* Login Button */}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* Right Image Section */}
      <div className="login-image-section"></div>
    </div>
  );
};

export default Login;
