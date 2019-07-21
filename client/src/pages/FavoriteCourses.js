import React from 'react';
import { SectionWrapper, List } from '../components';

const FavoriteCourses = ({ favoriteCourses = [], updateFavoriteCourses }) => (
  <SectionWrapper>
    <h2>My Favorite Courses</h2>
    <List items={favoriteCourses} handleItemClick={updateFavoriteCourses} allActive type="course" />
  </SectionWrapper>
);

export default FavoriteCourses;
