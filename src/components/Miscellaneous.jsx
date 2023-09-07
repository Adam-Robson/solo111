import { Link } from 'react-router-dom';
import crystal from '../assets/crystal.png';

export default function Miscellaneous() {
  return (
    <>
      <section className="max-w-full w-11/12 mx-auto fadein px-6">
        <Link className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
        <h1 className="text-7xl sm:text-8xl subpixel-antialiased mt-12">misc.</h1>
        <div>
          <img
            src={crystal}
            className="p-10"
            alt="image of out my window" />
          <p className="w-full text-center mx-auto text-lg">
            see some of my past adventures
            <Link
              className="font-semibold"
              to="https://lapaztravels.wordpress.com/"
            > here</Link>.</p>
        </div>
      </section>
    </>
  );
}
