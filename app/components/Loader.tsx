import Image from 'next/image';
export default function Loader() {
  return (
    <div className="w-full h-full p-6">
      <div className="relative w-full max-w-screen-md mx-auto opacity-90">
        <Image
          src="/gif/ctct.gif"
          alt="gif of the horizon"
          width="300"
          height="300"
          layout="responsive"
          className="rounded-lg shadow-lg"
        />

        <article className="rounded-lg absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300 ease-in-out text-xs sm:text-sm md:text-lg">
          <span className="text-center">
            <address className="p-2 text-lg subpixel-antialiased">{`loading, just for you :)`}</address>
          </span>
        </article>
      </div>
    </div>
  );
}
