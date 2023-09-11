import Home from './Home';
import useLoader from '../../utils/useLoader';

export default function HomePage() {
  return useLoader({ children: <Home /> });
}
