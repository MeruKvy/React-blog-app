import React from "react";
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

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
              style={{width: "400px"}}
            />
          ) : (
            <p className="blog-description">{article.description}</p>
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
            {isEditMode ? <DoneOutlineIcon/> : <DriveFileRenameOutlineIcon/>}
          </button>
          <button onClick={handleDelete} className="setting-btn">
            <DeleteForeverIcon  />
          </button>
        </div>
      </article>
    </div>
  );
};

export default Blog;
