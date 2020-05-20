import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../context';
import Content from '../content';

const AppRoot = _ => (
  <Router>
    <AppContextProvider>
      <Content />
    </AppContextProvider>
  </Router>
);

export default AppRoot;
