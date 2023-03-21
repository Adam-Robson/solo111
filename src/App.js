import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  NavLink
} from 'react-router-dom';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Arts from './components/Arts/Arts';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Writing from './components/Arts/Writing';
import Error from './components/Error/Error';

import { writings } from './data.js';

export default function App() {
  let location = useLocation();

  function showHomeLink() {
    if (location.pathname !== '/') {
      return <NavLink className="text-xs ml-8 relative top-2 md:ml-36 md:top-6" to='/'>home</NavLink>;
    } else {
      return null;
    }
  }
  return (
    <>
      { showHomeLink()}
      <Routes>
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/arts/:id" element={ <Writing writings={ writings } /> } />
        <Route path="/arts" element={ <Arts /> }/>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </>
  );
}
