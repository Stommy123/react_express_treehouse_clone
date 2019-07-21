// import React, { Component } from 'react';
// import axios from 'axios';
// import { SectionWrapper, Course } from '../components';

// class FavoriteCourses extends Component {
//   state = { courses: [] };

//   componentDidMount() {
//     this.fetchCourses();
//   }

//   fetchCourses = async _ => {
//     const { data: { courses = [] } = {} } = await axios.get('/courses/CSSCourses');
//     const parsedCourses = courses.filter(course => course.isFavorite);
//     this.setState({ courses: parsedCourses });
//   };
//   render() {
//     const { courses } = this.state;
//     console.log(courses);
//     return <div>{courses}</div>;
//   }
// }

// export default FavoriteCourses;
