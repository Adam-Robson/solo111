import Image from 'next/image';

export default function Contact() {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-screen-sm w-full mx-auto">
      <div className="relative w-full h-auto">
        <Image src="/gif/ctct.gif" alt="gif of the horizon" width="500" height="500" layout="responsive" />
        <p className="absolute w-full h-full top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300 ease-in-out text-xs sm:text-sm md:text-lg">
          <pre>
            reach out to me by email
            <address className="my-2">adamrayrobson@gmail.com</address></pre>
        </p>
      </div>
    </div>
  );
}
