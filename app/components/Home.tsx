import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">

      <div className="w-full">

        <figure className="video-container relative">
          <video
            className="object-center object-contain transition-opacity w-full mb-2"
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

        <p className="text-center text-lg/7 sm:text-2xl/8 md:text-3xl/9 subpixel-antialiased">web design & development, for people</p>
        <p className="p-2 text-center text-base/6 sm:text-xl/7 md:text-2xl/8 subpixel-antialiased">adam robson</p>

      </div>

    </div>
  );
}



