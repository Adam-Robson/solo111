import Miscellaneous from './Miscellaneous';
import useLoader from '../../hooks/useLoader';

export default function MiscellaneousPage() {
  return useLoader({ children: <Miscellaneous /> });
}
