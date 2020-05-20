import React, { useState, createContext } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [featuredTeacher, setFeaturedTeacher] = useState({ name: '', topic: '' });

  return <AppContext.Provider value={{ featuredTeacher, setFeaturedTeacher }}>{children}</AppContext.Provider>;
};
