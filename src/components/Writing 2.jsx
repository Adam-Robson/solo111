import { useNavigate, useParams } from 'react-router-dom';
/** bring in array of writings stored in project directory */
import { writings } from '../services/data.js';

export default function Writing() {
  /** bring in hook from teact-router v6 */
  const navigate = useNavigate();
  /** grab the parameters directly from the current URL */
  const { title } = useParams();

  /**
   * provide a familiar way
   * for the person visiting
   * the page to return to
   * arts page after reading
   * writing
   */

  function previousPage() {
    navigate(-1);
  }

  const writing = writings.find(({ alias }) => alias === title);

  return (
    <>
      <button
        className="absolute left-8 top-8 text-xl subpixel-antialiased"
        onClick={previousPage}
      >back</button>
      <h2
        className="text-center text-2xl subpixel-antialiased"
      >{writing.alias}</h2>
      <div
        className="text-center text-xl subpixel-antialiased"
      >{ writing.body }</div>
    </>
  );
}
