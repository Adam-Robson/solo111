import Link from 'next/link';
export default function Contact() {
  return (
    <div className="h-full flex flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
      <section className="max-h-1/2">
        <div className="flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
          <div className="w-full">
            <figure className="video-container relative">
              <video
                className="object-center object-contain transition-opacity w-full mb-2 rounded-lg shadow-xl"
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
              <figcaption className="caption absolute bottom-20 left-0 w-full text-center p-4 bg-black bg-opacity-60 text-white opacity-0 transition-opacity text-lg font-normal subpixel-antialiased">
                <p>{`helado de la calle`}</p>
                <p>{`la paz | mx`}</p>
              </figcaption>
            </figure>
            <p className="desc text-center text-lg/7 sm:text-2xl/8 md:text-3xl/9 font-light subpixel-antialiased">
              web design & development, for people
            </p>

            <p className="desc text-center text-sm/5 sm:text-base/6 md:text-lg/7 font-light desc subpixel-antialiased">
              reach out through the links below or by{' '}
              <Link
                className="font-bold subpixel-antialiased"
                href="mailto:adamrayrobson@gmail.com"
                title="Send me an email by clicking this link!"
              >
                email
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
