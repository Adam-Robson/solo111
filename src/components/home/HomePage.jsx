import Home from './Home';
import useLoader from '../../hooks/useLoader';

export default function HomePage() {
  return useLoader({ children: <Home /> });
}
