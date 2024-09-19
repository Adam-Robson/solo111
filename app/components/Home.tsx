import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full max-w-screen-lg mx-auto">
      <article className="w-full p-4 text-base sm:text-lg md:text-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl subpixel-antialiased">
          Adam Robson
        </h2>
        Software Engineer / Data Analyst / Artist
      </article>
      <section className="w-full flex flex-col md:flex-row">
        <div className="p-2">
          <Image
            className="image rounded-lg shadow-xl max-w-3xl mx-auto"
            src={'/images/dreamscape.png'}
            alt="animation of a dream world"
            height="500"
            width="800"
            priority
          />
        </div>

        <div className="p-4 min-w-48 md:min-w-60 mx-auto flex flex-col justify-center items-start flex-1 text-base/6">
          <p className="desc text-lg/7 sm:text-2xl/8 md:text-3xl/9 font-light subpixel-antialiased">
            web design & development, for people
          </p>
        </div>
      </section>
    </div>
  );
}
