import React from 'react';
import { SectionWrapper } from '../components';

const NotFound = _ => (
  <SectionWrapper className="not-found">
    <i className="material-icons icn-error">error_outline</i>
    <h2>Page Not Found</h2>
  </SectionWrapper>
);

export default NotFound;
