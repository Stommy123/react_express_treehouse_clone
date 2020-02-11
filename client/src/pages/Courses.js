import React, { Component } from 'react';
import axios from 'axios';
import { SectionWrapper, List, Search } from '../components';

const TOPICS = [
  { id: '1', topic: 'HTML' },
  { id: '2', topic: 'CSS' },
  { id: '3', topic: 'JavaScript' }
];

class Courses extends Component {
  state = { activeTopic: 'html', courses: [], filteredCourses: [], refetch: true };

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
    this.setState({ courses, filteredCourses: courses, refetch: false });
  };

  handleSearch = filteredCourses => this.setState({ filteredCourses });

  setTopic = topic => _ => this.setState({ activeTopic: topic.toLowerCase(), refetch: true });

  render() {
    const { courses, filteredCourses, activeTopic } = this.state;
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
        <Search handleSearch={this.handleSearch} data={courses} queryProp="title" />
        <List type="course" items={filteredCourses} />
      </SectionWrapper>
    );
  }
}

export default Courses;
