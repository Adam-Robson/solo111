import Arts from './Arts';
import useLoader from '../../utils/useLoader';

export default function ArtsPage() {
  return useLoader({ children: <Arts /> });
}


