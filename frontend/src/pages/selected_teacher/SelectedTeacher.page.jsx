import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SectionWrapper, Teacher } from '../../components';

const SelectedTeacher = _ => {
  const { id: teacherId } = useParams();
  const [teacher, setTeacher] = useState({});

  const fetchTeacher = async _ => {
    const { data } = await axios.get(`/teacher/${teacherId}`);

    setTeacher(data.teacher);
  };

  useEffect(() => {
    fetchTeacher();
  }, []);

  return (
    <SectionWrapper className='teacher'>
      <Teacher {...teacher} />
    </SectionWrapper>
  );
};

export default SelectedTeacher;
