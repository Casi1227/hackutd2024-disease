// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
// import articles from './Dashboard';

// const Post = () => {
//   const [title, setTitle] = useState('');
//   const [summary, setSummary] = useState('');
//   const [body, setBody] = useState('');
//   const navigate = useNavigate();

//   const handlePost = () => {
//     Object.assign(articles, {id: articles.length+1,
//       heading: title,
//       summary: summary,
//       fullText: body,
//       comments: [],})

//     navigate('/dashboard');
//   };

//   return (
//     <div className="post-container">
//       <Navbar />
//       <h2>Post Page</h2>
//       <div className="post-field"> 
//         <label>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter the title"
//         />
//       </div>
//       <div className="post-field">
//         <label>Summary</label>
//         <input
//           type="summary"
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           placeholder="Enter the summary"
//         />
//       </div>
//       <div className="post-field">
//         <label>Body</label>
//         <input
//           type="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           placeholder="Enter the body"
//         />
//       </div>
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// };

// export default Post;

import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

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
      <Navbar />
      <h2>Post Page</h2>
      <div className="post-field">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>
      <div className="post-field">
        <label>Summary</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Enter the summary"
        />
      </div>
      <div className="post-field">
        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter the body"
        />
      </div>
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Post;
