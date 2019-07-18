import React from 'react';

const Teacher = ({ id, img_src, name, bio, handleItemClick }) => (
  <li className="teacher" onClick={handleItemClick && handleItemClick(id)}>
    <img className="teacher-img" src={img_src} alt="teacher" />
    <h3>{name}</h3>
    <p>{bio}</p>
  </li>
);

export default Teacher;
