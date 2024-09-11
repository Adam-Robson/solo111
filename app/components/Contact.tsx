import Image from 'next/image';
import Link from 'next/link';
export default function Contact() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
      <section className="border-4 border-orange-800">
        <div className="flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
          <div className="w-full">
            <figure className="video-container relative">
              <video
                className="object-center object-contain transition-opacity w-full mb-2 rounded-lg shadow-lg"
                width="350"
                controls
                autoPlay
                loop
                muted
              >
                <source src="/video/coco.webm" type="video/webm" />
                <source src="/video/coco.mp4" type="video/mp4" />
                download the <Link href="/video/coco.webm">webm</Link> or
                <Link href="/video/coco.mp4">mp4</Link>.
              </video>
              <figcaption className="text caption absolute bottom-20 left-0 w-full text-center p-4 bg-black bg-opacity-60 text-white opacity-0 transition-opacity text-base font-normal subpixel-antialiased">
                <p>{`helado en la calle`}</p>
                <p>{`la paz | mx`}</p>
              </figcaption>
            </figure>
            <p className="text-center text-lg/7 sm:text-2xl/8 md:text-3xl/9 subpixel-antialiased">
              web design & development, for people
            </p>
            <p className="p-2 text-center text-base/6 sm:text-xl/7 md:text-2xl/8 subpixel-antialiased">
              adam robson
            </p>
          </div>
        </div>
      </section>

      <section className="border-4 border-blue-700">
        <div className="w-full h-full p-6">
          <div className="relative w-full">
            <Image
              src="/gif/ctct.gif"
              alt="gif of the horizon"
              width="300"
              height="300"
              layout="responsive"
              className="rounded-lg shadow-lg"
            />

            <article className="rounded-lg absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300 ease-in-out text-xs sm:text-sm md:text-lg">
              reach out through the links below or by email:
              <span className="text-center">
                <address className="p-2">adamrayrobson@gmail.com</address>
              </span>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
