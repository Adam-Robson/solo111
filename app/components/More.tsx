import Link from 'next/link';

export default function More() {
  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center w-full mx-auto max-w-screen-sm">
      <iframe
        className="rounded-lg"
        src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <div className="">
        {' '}
        or visit{' '}
        <Link href="https://lefogsong.bandcamp.com/" target="_blank">
          bandcamp
        </Link>
      </div>
    </div>
  );
}
