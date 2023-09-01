import { Link } from 'react-router-dom';
import crystal from '../assets/crystal.png';

export default function Miscellaneous() {
  return (
    <>
      <section className="">
        <h1 className="text-8xl subpixel-antialiased">misc.</h1>
        <div>
          <img
            src={crystal}
            className="p-10"
            alt="image of out my window" />
          <p className="w-40 text-2xl">
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
