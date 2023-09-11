import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import BioPage from './components/bio/BioPage';
import ProjectsPage from './components/projects/ProjectsPage';
import ResumePage from './components/resume/ResumePage';
import ArtsPage from './components/arts/ArtsPage';
import WritingPage from './components/arts/WritingPage';
import MiscellaneousPage from './components/miscellaneous/MiscellaneousPage';
import NotFound from './components/notfound/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<NotFound />} />
        <Route path='/bio' element={ <BioPage /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />
        <Route path='/resume' element={ <ResumePage /> } />
        <Route path='/arts' element={ <ArtsPage /> } />
        <Route path="/:params" element={ <WritingPage /> } />
        <Route path='/misc' element={<MiscellaneousPage />} />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}
