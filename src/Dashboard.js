
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Effect to filter articles when searchTerm changes
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredArticles(articles); // Reset to original articles when search is cleared
    } else {
      setFilteredArticles(
        articles.filter((article) =>
          article.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, articles]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Featured Cases</h2>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on user input
        />
      </div>

      <div className="articles-table">
        {filteredArticles.map((article) => (
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
