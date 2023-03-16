import React from 'react';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Arts from './components/Arts/Arts';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Error from './components/Error/Error';

import {
  Routes,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/arts" element={ <Arts /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </>
  );
}
