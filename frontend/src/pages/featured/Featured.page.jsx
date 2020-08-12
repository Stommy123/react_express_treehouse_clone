import React from 'react';
import { useParams } from 'react-router-dom';
import { SectionWrapper } from '../../components';

const Featured = _ => {
  const params = useParams();
  const { name, topic } = params;

  return (
    <SectionWrapper>
      <h2>Featured:</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching courses about{' '}
        <strong>{topic}</strong>!
      </p>
    </SectionWrapper>
  );
};

export default Featured;
