import React from 'react';
import { SectionWrapper } from '../components';

const Featured = ({ match }) => {
  const name = match.params.name;
  const topic = match.params.topic;
  return (
    <SectionWrapper>
      <h2>Featured:</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!
      </p>
    </SectionWrapper>
  );
};

export default Featured;
