import Link from 'next/link';
import { PiArrowLeftDuotone } from 'react-icons/pi';

export default function MusicPage() {
  return (
    <div className="fade min-h-screen w-full mx-auto px-6">
     <div className="max-w-sm relative">
      <Link className="absolute top-0 left-2 sm:top-4 sm:left-8" href="/">
        <PiArrowLeftDuotone size={30} color={'#b39180'} />
      </Link>
      </div>
      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[2.12rem] decoration-0">music</h1>
      </div>
      <div className="max-w-sm sm:max-w-md mx-auto my-6">
         <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
}
