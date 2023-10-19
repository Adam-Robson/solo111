import Image from 'next/image';
import Link from 'next/link';
import crystal from '../../public/crystal.png';

export default function Misc() {
  return (
    <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">
          misc.
      </h1>
      <div className="max-w-xs p-4 mx-auto">
        <Image
          src={crystal}
          className="crystal rounded-lg max-w-xs w-full mx-auto my-2"
          alt="image of out my window" />
      </div>
    </section>
  );
}
