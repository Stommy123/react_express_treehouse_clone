import React, { Component } from 'react';
import axios from 'axios';
import { SectionWrapper, List } from '../components';

class Teachers extends Component {
  state = { teachers: [] };
  componentDidMount() {
    this.fetchTeachers();
  }
  fetchTeachers = async _ => {
    const { data: { teachers = [] } = {} } = await axios.get('/teachers');
    this.setState({ teachers });
  };
  render() {
    const { teachers } = this.state;
    return (
      <SectionWrapper>
        <h2>Teachers</h2>
        <List items={teachers} type="teacher" className="group" />
      </SectionWrapper>
    );
  }
}

export default Teachers;
