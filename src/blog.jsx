import React from "react";
import { useState } from "react";

const Blog = ({ article, onDelete, onEdit }) => {
  const [newHeading, setNewHeading] = useState(article.title);
  const [newDescription, setNewDescription] = useState(article.description);

  const [isEditMode, setIsEditMode] = useState(false);
  const handleDelete = () => {
    onDelete(article.id);
  };

  const handleUpdate = () => {
    onEdit(article.id, newHeading, newDescription);
  };

  return (
    <div>
      <article className="blog">
        <div className="blog-text">
          {isEditMode ? (
            <input
              className="article-input"
              value={newHeading}
              onChange={(e) => setNewHeading(e.target.value)}
              placeholder="Enter new title"
            />
          ) : (
            <h3 className="blog-heading">{article.title}</h3>
          )}
          {isEditMode ? (
            <textarea
              className="article-textarea"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Enter new description"
            />
          ) : (
            <p>{article.description}</p>
          )}
        </div>
        <div>
          <button
            className="setting-btn edit"
            onClick={() => {
              setIsEditMode(!isEditMode);
              handleUpdate();
            }}
          >
            {isEditMode ? "Update" : "Edit"}
          </button>
          <button onClick={handleDelete} className="setting-btn">
            Delete
          </button>
        </div>
      </article>
    </div>
  );
};

export default Blog;
