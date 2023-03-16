import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Arts from './components/Arts/Arts';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Writing from './components/Writing/Writing';
import Error from './components/Error/Error';

import { writings } from './data.js';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/arts/:id" element={ <Writing writings={ writings } /> } />
        <Route path="/arts" element={ <Arts /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </>
  );
}
