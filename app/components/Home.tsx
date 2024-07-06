import Link from 'next/link';
export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-start w-full mx-auto">
      <figure className="video-container relative flex flex-col items-center justify-center mx-auto w-full max-w-xs sm:max-w-sm ">
        <video className="w-full object-cover object-center mx-auto rounded-md shadow-md transition-opacity" width="400" controls autoPlay loop muted>
          <source src="/video/coco.webm" type="video/webm" />
          <source src="/video/coco.mp4" type="video/mp4" />
          download the <Link href="/video/coco.webm">webm</Link> or
          <Link href="/video/coco.mp4">mp4</Link>.
        </video>
        <figcaption className="text caption absolute bottom-40 left-0 w-full text-center p-4 opacity-0 transition-opacity text-sm subpixel-antialiased">eating ice cream on the street in la paz, mexico</figcaption>
      </figure>
      <div className="w-full mt-4 flex flex-col items-center justify-center">
        <p className="text text-base sm:text-xl md:text-2xl subpixel-antialiased">web design & development, for people</p>
        <p className="text text-base sm:text-xl md:text-2xl subpixel-antialiased"><b>adam robson</b></p>
      </div>
    </div>
  );
}



