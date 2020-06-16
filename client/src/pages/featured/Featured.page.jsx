import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { SectionWrapper } from '../../components';

const Featured = _ => {
  const { featuredTeacher } = useContext(AppContext);

  return (
    <SectionWrapper>
      <h2>Featured:</h2>
      <p>
        Introducing <strong>{featuredTeacher.name}</strong>, a teacher who loves teaching courses about{' '}
        <strong>{featuredTeacher.topic}</strong>!
      </p>
    </SectionWrapper>
  );
};

export default Featured;
