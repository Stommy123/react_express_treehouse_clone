import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Teachers, SelectedTeacher, Courses, NotFound, Featured, FavoriteCourses } from '../pages';
import { Navigation } from '../components';

const Content = _ => (
  <div className="container">
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/teacher/:id" component={SelectedTeacher} />
      <Route exact path="/featured/:name/:topic" component={Featured} />
      <Route exact path="/courses" component={Courses} />
      {/* <Route exact path="/favorite-courses" component={FavoriteCourses} /> */}
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
