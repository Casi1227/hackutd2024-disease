import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = ['/dashboard'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      
      {isHomePage && (
        <>
          <h1>Welcome to the App</h1>
          <button onClick={() => navigate('/login')}>Go to Login</button>
          <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
        </>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

