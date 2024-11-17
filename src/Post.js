// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
// import './Post.css'; // Import the CSS file for styling

// const Post = ({ addArticle }) => {
//   const [title, setTitle] = useState('');
//   const [summary, setSummary] = useState('');
//   const [body, setBody] = useState('');
//   const navigate = useNavigate();

//   const handlePost = () => {
//     const newArticle = {
//       id: Date.now(),
//       heading: title,
//       summary: summary,
//       fullText: body,
//       comments: [],
//     };
//     addArticle(newArticle);
//     navigate('/dashboard');
//   };

//   return (
//     <div className="post-container">
//       <div className="post-content">
//         <h2>Post Page</h2>
//         <div className="post-field">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter the title"
//           />
//         </div>
//         <div className="post-field">
//           <label>Summary</label>
//           <input
//             type="text"
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//             placeholder="Enter the summary"
//           />
//         </div>
//         <div className="post-field">
//           <label>Body</label>
//           <input
//             type="text"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="Enter the body"
//           />
//         </div>
//         <button onClick={handlePost}>Post</button>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handlePost = () => {
    const newArticle = {
      id: Date.now(),
      heading: title,
      summary: summary,
      fullText: body,
      comments: [],
    };
    addArticle(newArticle);
    navigate('/dashboard');
  };

  return (
    <div className="post-container">
      <div className="post-content">
        <h2>Create a Post</h2>
        <div className="post-field">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input-field title-input"
          />
        </div>
        <div className="post-field">
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            className="input-field summary-input"
          />
        </div>
        <div className="post-field">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
            className="input-field body-input"
          />
        </div>
        <div className="button-group">
          <button className="upload-button">+ Upload an Image</button>
          <button className="upload-button">+ Upload a File</button>
        </div>
        <button onClick={handlePost} className="post-button">+ Post</button>
      </div>
    </div>
  );
};

export default Post;
