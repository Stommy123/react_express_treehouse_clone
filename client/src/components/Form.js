import React, { Component } from 'react';

class Form extends Component {
  state = { name: String(), topic: String() };
  handleInputChange = field => e => this.setState({ [field]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: String(), topic: String() });
  };
  render() {
    const { name, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" value={name} required onChange={this.handleInputChange('name')} />
        <input type="text" placeholder="Topic" value={topic} required onChange={this.handleInputChange('topic')} />
        <button type="submit">Go!</button>
      </form>
    );
  }
}

export default Form;
