import Link from 'next/link';

export default function More() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
      <h2 className="mb-8 text-sm sm:text-base md:text-lg subpixel-antialiased">
        checkout my music on spotify or your favorite streaming service
      </h2>
      <iframe
        className="rounded-lg"
        src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Le fog on spotify!"
      ></iframe>

      <div className="mt-8 text-sm sm:text-base md:text-lg subpixel-antialiased">
        {' '}
        or visit{' '}
        <Link
          href="https://lefogsong.bandcamp.com/"
          target="_blank"
          className="font-bold subpixel-antialiased"
          title="Visit le fog's bandcamp by clicking this link!"
        >
          bandcamp
        </Link>
      </div>
    </div>
  );
}
