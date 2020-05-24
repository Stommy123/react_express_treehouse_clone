import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SectionWrapper, List, Search } from '../../components';

const TOPICS = [
  { id: '1', topic: 'HTML' },
  { id: '2', topic: 'CSS' },
  { id: '3', topic: 'JavaScript' },
];

const Courses = _ => {
  const [activeTopic, setActiveTopic] = useState('html');
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchCourses = async _ => {
    const { data } = await axios.get(`/courses/${activeTopic}`);

    setCourses(data.courses);
  };

  const handleSearch = input => setSearchInput(input);

  const handleTopicChange = newTopic => _ => setActiveTopic(newTopic.toLowerCase());

  useEffect(
    _ => {
      fetchCourses();
    },
    [activeTopic]
  );

  const filteredCourses = courses.filter(({ title }) =>
    title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <SectionWrapper className='courses'>
      <div className='course-header group'>
        <h2>Courses</h2>
        <List
          className='course-nav'
          type='topic'
          items={TOPICS}
          handleItemClick={handleTopicChange}
          activeItem={activeTopic}
        />
      </div>
      <Search handleSearch={handleSearch} />
      <List type='course' items={filteredCourses} />
    </SectionWrapper>
  );
};

export default Courses;
