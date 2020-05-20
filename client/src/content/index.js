import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Teachers, SelectedTeacher, Courses, NotFound, Featured } from '../pages';
import { Navigation } from '../components';

const Content = _ => (
  <div className='container'>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/teachers' component={Teachers} />
      <Route exact path='/teacher/:id' component={SelectedTeacher} />
      <Route exact path='/featured' component={Featured} />
      <Route exact path='/courses' component={Courses} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
