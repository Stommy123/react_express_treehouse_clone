import React from 'react';
import classNames from 'classnames';

const Topic = ({ topic: label, handleItemClick, activeItem }) => {
  const topic = label.toLowerCase();
  const isActive = activeItem === topic;
  return (
    <li>
      <button className={classNames({ active: isActive })} onClick={handleItemClick(topic)}>
        {label}
      </button>
    </li>
  );
};

export default Topic;
