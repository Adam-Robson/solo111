import { useNavigate, useParams, Link } from 'react-router-dom';
/** bring in array of writings stored in project directory */
import { writings } from '../../services/writings.js';

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
    <section className="max-w-full w-11/12 mx-auto fadein px-6 overflow-hidden">
      <button onClick={ handleHomeNav } className="absolute top-6 right-6 subpixel-antialiased border border-cyan-300" to="/">home</button>
      <Link
        className="absolute left-12 md:left-32 top-12 md:top-32 text-xl subpixel-antialiased"
        onClick={previousPage}
      >back</Link>
      <div className="flex flex-col h-screen justify-center">
        <h1 className="text-5xl font-extralight text-center subpixel-antialiased mt-12 mb-4 underline underline-offset-4 decoration-1">{ writing.alias }</h1>
        <p className="text-center font-extralight text-lg subpixel-antialiased">{writing.body}</p>
      </div>
    </section>
  );
}
