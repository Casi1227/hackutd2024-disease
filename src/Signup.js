import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="signup-field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="signup-field">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </div>
      <div className="signup-field">
        <input
          type="checkbox"
          checked={isMedicalProfessional}
          onChange={(e) => setIsMedicalProfessional(e.target.checked)}
        />
        <label>I am a medical professional</label>
      </div>
      {isMedicalProfessional && (
        <div className="signup-field">
          <label>Medical ID (10 digits)</label>
          <input
            type="text"
            value={medicalId}
            onChange={(e) => setMedicalId(e.target.value)}
            placeholder="Enter your Medical ID"
            maxLength="10"
          />
        </div>
      )}
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default Signup;