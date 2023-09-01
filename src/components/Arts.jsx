import { Link } from 'react-router-dom';
/** bring in array of writings stored in project directory */
import { writings } from '../services/data.js';

export default function Arts() {

  /**
   * map through objects in writings
   * to display the alias of each
   * as a linked list item; assign
   * a reference to the result,
   * which is displayed below in
   * the ul element
   */

  const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link
        className="text-2xl subpixel-antialiased"
        to={`/${writing.alias}`}
      >
        {writing.alias}
      </Link>
    </li>
  ));

  return (
    <>
      <h1 className="text-6xl subpixel-antialiased">arts</h1>
      <section className="w-full mx-auto">
        <h2 className="w-full text-2xl subpixel-antialiased">
              le fog
        </h2>
        <iframe
          className="rounded-xl md:w-4/5"
          src={
            `https://open.spotify.com
                /embed/album/64LjLBqFsNtxvWGZ3jDtIy
                ?utm_source=generator&theme=0`
          }
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen="false"
          allow="clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>

      <section className="w-full mx-auto">
        <h2 className="w-full text-2xl subpixel-antialiased">
            writings
        </h2>
        <ul
          className="w-full mx-auto grid grid-flow-row md:grid-flow-col"
        >{list}</ul>
      </section>
    </>
  );
}
