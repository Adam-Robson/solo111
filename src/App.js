import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Arts from './components/Arts';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Writing from './components/Writing';
import NotFound from './components/NotFound';
import Misc from './componets/Misc';

import '@fontsource-variable/inter';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={ <Home /> } errorElement={ <NotFound/> } />
          <Route path='/bio' element={ <Bio /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/arts' element={ <Arts /> } />
          <Route path="/arts/:name" element={ <Writing /> } />
          <Route path='/misc' element={ <Misc /> } />
        </Routes>
      </Router>
    </>
  );
}