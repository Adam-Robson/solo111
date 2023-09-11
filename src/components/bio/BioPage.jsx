import Bio from './Bio';
import useLoader from '../../hooks/useLoader';

export default function BioPage() {
  return useLoader({ children: <Bio /> });
}
