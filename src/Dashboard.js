// import React, { useState } from 'react';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const articles = [
//     {
//       id: 1,
//       heading: 'Article 1',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that is rarely discussed. Here is more detailed information about the disease, including its symptoms, treatments, and case studies.',
//       comments: [
//         { id: 1, text: 'Great article', user: 'juan' },
//         { id: 2, text: 'This is a question?', user: '??' },
//       ],
//     },
//     {
//       id: 2,
//       heading: 'Article 2',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'This article goes in-depth about a rare disease that is seldom discussed. It covers the origins, symptoms, and recent studies about the condition.',
//       comments: [{ id: 1, text: 'Hello', user: 'Alisha' }],
//     },
//     {
//       id: 3,
//       heading: 'Article 3',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that is rarely seen.',
//       fullText:
//         'Detailed content about the rare disease featured in Article 3. It includes case studies, possible treatments, and ongoing research.',
//       comments: [{ id: 1, text: 'This is a comment.', user: 'John Doe' }],
//     },
//     {
//       id: 4,
//       heading: 'Article 4',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'This article contains detailed information about a rare and poorly understood disease, including patient stories and expert insights.',
//       comments: [{ id: 1, text: 'What in the world?', user: 'Josy' }],
//     },
//     {
//       id: 5,
//       heading: 'Article 5',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'An in-depth look at a rare disease discussed in Article 5. The article explores treatment options and recent advancements.',
//       comments: [{ id: 1, text: 'Hehe', user: 'Cas' }],
//     },
//     {
//       id: 6,
//       heading: 'Article 6',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'The content of Article 6 includes extensive research and expert analysis of a rare condition that is seldom mentioned in medical literature.',
//       comments: [{ id: 1, text: 'This article sucks.', user: 'Hannah' }],
//     },
//     {
//       id: 7,
//       heading: 'Article 7',
//       summary:
//         'This is a brief 2-sentence summary of the article. This is an article about a rare disease that no one has heard of before.',
//       fullText:
//         'Article 7 delves into a unique medical case, providing a comprehensive overview of the disease, its symptoms, and potential cures.',
//       comments: [{ id: 1, text: 'This is a comment.', user: 'Miel' }],
//     },
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>
//       <div className="articles-table">
//         {articles.map((article) => (
//           <div
//             key={article.id}
//             className="article-box"
//             onClick={() => setSelectedArticle(article)}
//           >
//             <h3>{article.heading}</h3>
//             <div className="summary-box">{article.summary}</div>
//             <div className="click-to-expand">Click to read more...</div>
//           </div>
//         ))}
//       </div>

//       {selectedArticle && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>{selectedArticle.heading}</h2>
//             <p><strong>Summary:</strong> {selectedArticle.summary}</p>
//             <p><strong>Full Text:</strong> {selectedArticle.fullText}</p>

//             <h3>Comments</h3>
//             <div className="comments-section">
//               {selectedArticle.comments.map((comment) => (
//                 <div key={comment.id} className="comment">
//                   <strong>{comment.user}:</strong> {comment.text}
//                 </div>
//               ))}
//             </div>

//             <button onClick={() => setSelectedArticle(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="articles-table">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-box"
            onClick={() => setSelectedArticle(article)}
          >
            <h3>{article.heading}</h3>
            <div className="summary-box">{article.summary}</div>
            <div className="click-to-expand">Click to read more...</div>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedArticle.heading}</h2>
            <p><strong>Summary:</strong> {selectedArticle.summary}</p>
            <p><strong>Full Text:</strong> {selectedArticle.fullText}</p>

            <h3>Comments</h3>
            <div className="comments-section">
              {selectedArticle.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <strong>{comment.user}:</strong> {comment.text}
                </div>
              ))}
            </div>

            <button onClick={() => setSelectedArticle(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
