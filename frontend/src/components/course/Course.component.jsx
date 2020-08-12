import React from 'react';

const Course = ({ img_src, title, description }) => (
  <li className="course media group">
    <img className="course-img" src={img_src} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export default Course;
