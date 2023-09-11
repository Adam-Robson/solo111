import Arts from './Arts';
import useLoader from '../../hooks/useLoader';

export default function ArtsPage() {
  return useLoader({ children: <Arts /> });
}


