import React from 'react';
import classNames from 'classnames';

const SectionWrapper = ({ className, children }) => (
  <div className={classNames('main-content', className)}>{children}</div>
);

export default SectionWrapper;
