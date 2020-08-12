import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from '../components';
import { Home, About, Teachers, SelectedTeacher, Courses, NotFound, Featured } from '../pages';

const AppRoot = _ => (
  <Router>
    <div className='container'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/teachers' component={Teachers} />
        <Route exact path='/teacher/:id' component={SelectedTeacher} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/featured/:name/:topic' component={Featured} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoot;
