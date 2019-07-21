import React, { Component } from 'react';
import axios from 'axios';
import { SectionWrapper, List, Search } from '../components';

const TOPICS = [{ id: '1', topic: 'HTML' }, { id: '2', topic: 'CSS' }, { id: '3', topic: 'JavaScript' }];

class Courses extends Component {
  state = { activeTopic: 'html', courses: [], filteredCourses: [], refetch: true, isFavorite: false };
  
  componentDidMount() {
    const { activeTopic } = this.state;
    this.fetchCourses(activeTopic);
  }

  componentDidUpdate() {
    const { refetch, activeTopic } = this.state;
    refetch && this.fetchCourses(activeTopic);
  }

  fetchCourses = async topic => {
    const { data: { courses = [] } = {} } = await axios.get(`/courses/${topic}`);
    console.log(courses)
    const parsedCourses = courses.map(course => ({...course, isFavorite: this.state.isFavorite}))
    this.setState({ courses: parsedCourses, filteredCourses: parsedCourses, refetch: false });
  };

  handleSearch = filteredCourses => this.setState({ filteredCourses });

  setTopic = topic => _ => this.setState({ activeTopic: topic.toLowerCase(), refetch: true });

  updateCourseStatus = id => _ => {
    const { courses } = this.state;
    const updatedCourses = courses.map(course =>
      course.id === id ? { ...course, isFavorite: !course.isFavorite } : course
    );
    this.setState({ courses: updatedCourses });
  };

  getFavoriteCourses = e => {
    e.preventDefault();
    const { courses, isFavorite } = this.state;
    const favoriteCourses = courses.filter(course => course.isFavorite);
    this.setState({ filteredCourses: favoriteCourses, isFavorite: !isFavorite }) 
    if (isFavorite) this.setState({filteredCourses: courses})
  };

  render() {
    const { courses, filteredCourses, activeTopic, isFavorite } = this.state;
    return (
      <SectionWrapper className="courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <List
            className="course-nav"
            type="topic"
            items={TOPICS}
            handleItemClick={this.setTopic}
            activeItem={activeTopic}
          />
        </div>
        <div className="course-favorites">
          {courses && <Search handleSearch={this.handleSearch} data={courses} queryProp="title" />}
          <button onClick={this.getFavoriteCourses}>{isFavorite ? 'Hide Favorites' : 'Show Favorites'}</button>
        </div>
        <List type="course" items={filteredCourses} toggleStatus={this.updateCourseStatus} />
      </SectionWrapper>
    )
  }
}

export default Courses;
