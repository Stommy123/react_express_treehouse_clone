import React from 'react';
import { SectionWrapper, Form } from '../../components';

const Home = _ => (
  <SectionWrapper className='home'>
    <h2>Multi Page React App Example</h2>
    <p>
      Learn front end web development and much more! This simple directory app offers a preview of
      our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn
      to code and get the skills you need to launch a new career in front end web development.
    </p>
    <p>
      We have thousands of videos created by expert teachers on web design and front end
      development. Our library is continually refreshed with the latest on web technology so you
      will never fall behind.
    </p>
    <hr />
    <Form />
  </SectionWrapper>
);

export default Home;