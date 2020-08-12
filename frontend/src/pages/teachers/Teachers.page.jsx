import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SectionWrapper, List, Search } from '../../components';

const Teachers = _ => {
  const history = useHistory();
  const [teachers, setTeachers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchTeachers = async _ => {
    const { data } = await axios.get('/teachers');

    const teachersWithProfilePicture = data.teachers.filter(({ img_src }) => img_src);

    setTeachers(teachersWithProfilePicture);
  };

  const handleSearch = input => setSearchInput(input);

  const handleSelectTeacher = teacherId => _ => history.push(`/teacher/${teacherId}`);

  useEffect(_ => {
    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter(({ name }) =>
    name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <SectionWrapper>
      <h2>Teachers</h2>
      <Search handleSearch={handleSearch} />
      <List
        items={filteredTeachers}
        type='teacher'
        className='group'
        handleItemClick={handleSelectTeacher}
      />
    </SectionWrapper>
  );
};

export default Teachers;
