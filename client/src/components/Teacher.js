import React from 'react';

const Teacher = ({ img_src, name, bio }) => (
  <li className="teacher">
    <img className="teacher-img" src={img_src} alt="teacher" />
    <h3>{name}</h3>
    <p>{bio}</p>
  </li>
);

export default Teacher;
