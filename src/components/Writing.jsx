import { useNavigate, useParams } from 'react-router-dom';
/** bring in array of writings stored in project directory */
import { writings } from '../services/data.js';

export default function Writing() {
  /** bring in hook from react-router v6 */
  const navigate = useNavigate();
  /** grab the parameters directly from the current URL */
  const { params } = useParams();

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

  function handleHomeNav() {
    navigate('/');
  }

  const writing = writings.find(({ alias }) => alias === params);

  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</button>

      <button
        className="absolute right-10 top-24 text-xl subpixel-antialiased"
        onClick={previousPage}
      >back</button>
      <h1 className="text-7xl sm:text-8xl text-center subpixel-antialiased mt-4">{ writing.alias }</h1>
      <div
        className="text-center text-xl sm:text-2xl subpixel-antialiased"
      >{ writing.body }</div>
    </section>
  );
}
