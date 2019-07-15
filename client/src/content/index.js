import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Teachers, Courses, NotFound, Featured } from '../pages';
import { Navigation } from '../components';

const Content = _ => (
  <div className="container">
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/featured/:name/:topic" component={Featured} />
      <Route path="/courses" component={Courses} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
