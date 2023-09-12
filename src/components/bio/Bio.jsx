import { useNavigate } from 'react-router-dom';
import BioCard from './BioCard';

import or from '../../assets/slvrfls.png';
import adam from '../../assets/adaam.png';
import globe from '../../assets/globe.png';

export default function Bio() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <button
        to="/"
        onClick={handleHomeNav}
        className="absolute top-6 right-6 subpixel-antialiased homelink"
      >home</button>
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-8">bio</h1>
      <BioCard
        imageUrl={or}
        className="bioimage max-w-sm max-h-20 border border-cyan-300"
        text="I am a software engineer and artist living in the beautiful pacific northwest."
      />
      <BioCard
        className="bioimage max-w-sm border border-cyan-300"
        imageUrl={globe}
        text={
          'Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes on the proper branch based on the situation at hand. This is called conditional execution. --Marijn Haverbeke, Eloquent JavaScript'
        }
      />
      <BioCard
        className="bioimage max-w-sm border border-cyan-300"
        imageUrl={adam} text="I work mainly with Postgres, Express, React and Node.  I find my focus gravitates toward the User Experience when programming. I like to challenge myself and think outside of the box."
      />
    </section>
  );
}
