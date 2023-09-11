import Projects from './Projects';

import useLoader from '../../utils/useLoader';

export default function ProjectsPage() {
  return useLoader({ children: <Projects /> });
}
