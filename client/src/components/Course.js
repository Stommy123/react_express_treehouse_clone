import React from 'react';

const Course = ({ id, img_src, title, description, toggleStatus, isFavorite }) => (
  <li className="course media group">
    <img className="course-img" src={img_src} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={toggleStatus && toggleStatus(id)}>{isFavorite ? "Remove from" : "Add to"} favorites</button>
    </div>
  </li>
);

export default Course;
