import Writing from './Writing';
import useLoader from '../../utils/useLoader';

export default function WritingPage() {
  return useLoader({ children: <Writing /> });
}
