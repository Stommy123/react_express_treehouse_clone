import React, { Component } from 'react';
import axios from 'axios';
import { SectionWrapper, Teacher } from '../components';

class SelectedTeacher extends Component {
  state = { teacher: {} };

  componentDidMount() {
    this.fetchTeacher();
  }

  fetchTeacher = async _ => {
    const { id } = this.props.match.params;
    const { data: { teacher } = {} } = await axios.get(`/teacher/${id}`);
    this.setState({ teacher });
  };

  render() {
    const { teacher } = this.state;
    return (
      <SectionWrapper className="teacher">
        <Teacher {...teacher} />
      </SectionWrapper>
    );
  }
}

export default SelectedTeacher;
