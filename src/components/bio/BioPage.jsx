import Bio from './Bio';
import useLoader from '../../utils/useLoader';

export default function BioPage() {
  return useLoader({ children: <Bio /> });
}
