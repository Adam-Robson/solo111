import Image from 'next/image';

export default function Contact() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">

      <div className="relative w-full">
        <Image
          src="/gif/ctct.gif"
          alt="gif of the horizon"
          width="350"
          height="350"
          layout="responsive"
        />

        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300 ease-in-out text-xs sm:text-sm md:text-lg">
          reach out through the links below or by email:

          <div>
            <address className="">adamrayrobson@gmail.com</address>
          </div>

        </div>

      </div>

    </div>
  );
}
