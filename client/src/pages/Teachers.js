import React, { Component } from 'react';
import axios from 'axios';
import { SectionWrapper, List, Search } from '../components';

class Teachers extends Component {
  state = { teachers: [], filteredTeachers: [] };
  componentDidMount() {
    this.fetchTeachers();
  }
  fetchTeachers = async _ => {
    const { data: { teachers = [] } = {} } = await axios.get('/teachers');
    this.setState({ teachers, filteredTeachers: teachers });
  };
  handleSearch = filteredTeachers => this.setState({ filteredTeachers });
  render() {
    const { filteredTeachers, teachers } = this.state;
    return (
      <SectionWrapper>
        <h2>Teachers</h2>
        <Search handleSearch={this.handleSearch} data={teachers} queryProp="name" />
        <List items={filteredTeachers} type="teacher" className="group" />
      </SectionWrapper>
    );
  }
}

export default Teachers;
