import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Teachers, SelectedTeacher, Courses, NotFound, Featured, FavoriteCourses } from '../pages';
import { Navigation } from '../components';

class Content extends Component {
  state = { favoriteCourses: [] };

  updateFavoriteCourses = selectedCourse => _ => {
    const { favoriteCourses } = this.state;
    const alreadyFavorited = favoriteCourses.some(({ id }) => id === selectedCourse.id);
    const updatedFavorites = alreadyFavorited
      ? favoriteCourses.filter(({ id }) => id === selectedCourse.id)
      : [...favoriteCourses, selectedCourse];
    this.setState({ favoriteCourses: updatedFavorites });
  };

  render() {
    const { favoriteCourses } = this.state;
    return (
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/teacher/:id" component={SelectedTeacher} />
          <Route path="/featured/:name/:topic" component={Featured} />
          <Route
            path="/courses"
            render={_ => (
              <Courses favoriteCourses={favoriteCourses} updateFavoriteCourses={this.updateFavoriteCourses} />
            )}
          />
          <Route
            path="/favoriteCourses"
            render={_ => (
              <FavoriteCourses favoriteCourses={favoriteCourses} updateFavoriteCourses={this.updateFavoriteCourses} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Content;
