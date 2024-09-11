import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full max-w-screen-lg mx-auto">
      <section className="w-full flex flex-col md:flex-row">
        <article className="p-2">
          <Image
            className="image rounded-lg shadow-lg max-w-3xl mx-auto"
            src={'/images/dreamscape.png'}
            alt="animation of a dream world"
            height="500"
            width="800"
            priority
          />
        </article>

        <article className="p-4 min-w-48 md:min-w-60 mx-auto flex flex-col justify-center items-start flex-1 text-base/6">
          <div className="desc">digital architect /</div>
          <div className="desc">data driven-design /</div>
          <div className="desc">technical composition /</div>
          <div className="desc">virtual identity /</div>
          <div className="desc">automation specialist</div>
        </article>
      </section>
    </div>
  );
}
