import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Arts from './components/Arts';
import Writing from './components/Writing';
import Miscellaneous from './components/Miscellaneous';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<NotFound />} />
        <Route path='/bio' element={ <Bio /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/resume' element={ <Resume /> } />
        <Route path='/arts' element={ <Arts /> } />
        <Route path="/arts/:title" element={ <Writing /> } />
        <Route path='/misc' element={<Miscellaneous />} />
        <Route path='*' element={ <NotFound /> } />
       </Routes>
    </Router>
  );
}
