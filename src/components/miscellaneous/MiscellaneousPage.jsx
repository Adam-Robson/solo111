import Miscellaneous from './Miscellaneous';
import useLoader from '../../utils/useLoader';

export default function MiscellaneousPage() {
  return useLoader({ children: <Miscellaneous /> });
}
