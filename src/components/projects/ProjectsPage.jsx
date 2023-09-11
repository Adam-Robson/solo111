import Projects from './Projects';

import useLoader from '../../hooks/useLoader';

export default function ProjectsPage() {
  return useLoader({ children: <Projects /> });
}
