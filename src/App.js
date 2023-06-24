import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Bio from './components/Bio.jsx';
import Art from './components/Art';
import Writing from './components/Writing';
// Supports weights 100-900
import '@fontsource-variable/inter';

export default function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={ <Home /> } />
        <Route path='/bio' element={ <Bio /> } />
        <Route path='/art' element={ <Art /> }>
          <Route path="/art/:name" element={ <Writing /> } />
        </Route>
      </Routes>
    </>
  );
}
