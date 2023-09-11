import Writing from './Writing';
import useLoader from '../../hooks/useLoader';

export default function WritingPage() {
  return useLoader({ children: <Writing /> });
}
