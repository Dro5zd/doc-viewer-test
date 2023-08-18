import React from 'react';
import './App.css';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
};
