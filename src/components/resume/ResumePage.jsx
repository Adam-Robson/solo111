import Resume from './Resume';
import useLoader from '../../hooks/useLoader';

export default function ResumePage() {
  return useLoader({ children: <Resume /> });
}
