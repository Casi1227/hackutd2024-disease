import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMedicalProfessional, setIsMedicalProfessional] = useState(false);
  const [medicalId, setMedicalId] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (isMedicalProfessional && medicalId.length !== 10) {
      alert('Medical ID must be 10 digits long.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Account created successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      {/* Left Content Section */}
      <div className="signup-content">
        {/* Header with Logo */}
        <div className="signup-header">
          <div className="logo-frame">
            <img src="logo.png" alt="Logo" className="logo-image" />
          </div>
          <h2 className="signup-heading">Sign Up</h2>
        </div>

        {/* Email Input */}
        <div className="signup-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="signup-input"
          />
        </div>

        {/* Password Input */}
        <div className="signup-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="signup-input"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="signup-field">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="signup-input"
          />
        </div>

        {/* Medical Professional Checkbox */}
        <div className="signup-field checkbox-field">
          <input
            type="checkbox"
            checked={isMedicalProfessional}
            onChange={(e) => setIsMedicalProfessional(e.target.checked)}
            className="signup-checkbox"
          />
          <label>I am a medical professional</label>
        </div>

        {/* Medical ID Input (Conditional) */}
        {isMedicalProfessional && (
          <div className="signup-field">
            <label>Medical ID (10 digits)</label>
            <input
              type="text"
              value={medicalId}
              onChange={(e) => setMedicalId(e.target.value)}
              placeholder="Enter your Medical ID"
              maxLength="10"
              className="signup-input"
            />
          </div>
        )}

        {/* Create Account Button */}
        <button className="signup-button" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>

      {/* Right Image Section */}
      <div className="signup-image-section"></div>
    </div>
  );
};

export default Signup;
