import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Arts from './components/arts/Arts';
import Writing from './components/arts/Writing';
import Miscellaneous from './components/miscellaneous/Miscellaneous';
import NotFound from './components/notfound/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data-testid="home-element" />} errorElement={<NotFound />} />
        <Route path="/bio" element={ <Bio /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/arts" element={ <Arts /> } />
        <Route path="/:params" element={ <Writing /> } />
        <Route path="/misc" element={<Miscellaneous />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}
