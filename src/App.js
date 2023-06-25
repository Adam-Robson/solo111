import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Bio from './components/Bio.jsx';
import Art from './components/Art';
import Writing from './components/Writing';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Misc from './components/Misc';
import NotFound from './components/NotFound';
// Supports weights 100-900
import '@fontsource-variable/inter';

export default function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={ <Home /> } errorElement={ <NotFound/> } />
        <Route path='/bio' element={ <Bio /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/resume' element={ <Resume /> } />
        <Route path='/art' element={ <Art /> } />
        <Route path="/art/:name" element={ <Writing /> } />
        <Route path='/misc' element={ <Misc /> } />
      </Routes>
    </>
  );
}
