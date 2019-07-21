import React from 'react';

const Course = ({ id, img_src, title, description, handleItemClick, activeItems, allActive }) => {
  const course = { id, img_src, title, description };
  const alreadyFavorited = activeItems.some(item => item.id === id);
  const label = allActive || alreadyFavorited ? 'Remove from favorites' : 'Add to favorites';
  return (
    <li className="course media group">
      <img className="course-img" src={img_src} alt="course" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={handleItemClick(course)}>{label}</button>
    </li>
  );
};

export default Course;
