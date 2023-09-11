import Resume from './Resume';
import useLoader from '../../utils/useLoader';

export default function ResumePage() {
  return useLoader({ children: <Resume /> });
}
