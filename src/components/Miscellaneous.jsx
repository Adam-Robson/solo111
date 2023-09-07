import { Link } from 'react-router-dom';
import crystal from '../assets/crystal.png';

export default function Miscellaneous() {
  return (
    <>
      <section className="">
        <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
        <h1 className="text-8xl subpixel-antialiased">misc.</h1>
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
