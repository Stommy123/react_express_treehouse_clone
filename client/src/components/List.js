import React from 'react';
import classNames from 'classnames';
import { Course, Teacher, Topic } from '.';

const List = ({ items = [], type, className, handleItemClick, activeItem, activeItems = [], allActive }) => {
  const Component = {
    course: Course,
    teacher: Teacher,
    topic: Topic
  }[type];
  return (
    <ul className={classNames(className)}>
      {items.map(item => (
        <Component
          {...item}
          key={item.id}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
          activeItems={activeItems}
          allActive={allActive}
        />
      ))}
    </ul>
  );
};

export default List;
