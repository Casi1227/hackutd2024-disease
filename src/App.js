// import React from 'react';
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import Home from './Home';
// import Login from './Login';
// import Signup from './Signup';
// import Dashboard from './Dashboard';
// import Navbar from './Navbar';
// import Post from './Post';
// import Profile from './Profile';

// function App() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const showNavbar = ['/dashboard'].includes(location.pathname);
//   const isHomePage = location.pathname === '/';

//   return (
//     <div className="App">
//       {showNavbar && <Navbar />}
      
//       {isHomePage && (
//         <>
//           <h1>Welcome to the App</h1>
//           <button onClick={() => navigate('/login')}>Go to Login</button>
//           <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
//         </>
//       )}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Post from './Post';
import Profile from './Profile';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Show Navbar only on certain pages
  const [articles, setArticles] = useState([
    {
      id: 1,
      heading: 'Article 1',
      summary: 'This is a brief 2-sentence summary of the article...',
      fullText: 'This is a brief 2-sentence summary of the article...',
      comments: [
        { id: 1, text: 'Great article', user: 'juan' },
        { id: 2, text: 'This is a question?', user: '??' },
      ],
    },
    // Add other articles here
  ]);

  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const showNavbar = ['/dashboard', '/post', '/profile', '/post', '/profile'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}


      {isHomePage && (
        <div className="container">
          {/* Left Image Section */}
          <div className="image-section"></div>

          {/* Right Content Section */}
          <div className="content-section">
            {/* Circular Logo Frame */}
            <div className="logo-frame">
              <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
            <h1>GinkGO</h1>
            <h2>case closed.</h2>
            <div className="button-container">
              <button onClick={() => navigate('/login')}>LOGIN</button>
              <button onClick={() => navigate('/signup')}>SIGN UP</button>
            </div>
          </div>
        </div>
      )}

      {/* Define Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard articles={articles} />} />
        <Route path="/post" element={<Post addArticle={addArticle} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
