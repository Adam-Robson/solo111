import Image from 'next/image';
import Link from 'next/link';
import { PiArrowLeftDuotone, PiVanDuotone } from 'react-icons/pi';
import caty from '../../public/caty.png';
import faceOne from '../../public/slvrfls.png';

export default function BioPage() {
  return (
    <div className="fade min-h-screen max-w-screen w-11/12 mx-auto flex flex-col items-center justify-start px-6">
      <Link className="absolute top-4 left-6" href="/"><PiArrowLeftDuotone size={24} color={'#b39180'} /></Link>
      <div className="w-full flex justify-center">
        <h1 className="text-8xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[1.95rem] decoration-0">bio</h1>
      </div>
      <p className="max-w-sm mx-auto text-sm tracking-tight subpixel-antialiased my-4">
        Born and raised in south California, I spent my young adult years in the Bay Area where I did my undergraduate studies. I would soon meet my partner and together we would decide to travel around without aim in a 1980 Aircooled Volkswagen Vanagon. We even documented some of the trip! 
      </p>
      
      <div className="group tooltip relative inline-block w-32 text-center px-1 rounded-sm z-10"> 
       <span className="tooltiptext invisible w-24 text-left px-2 py-0 rounded-sm absolute bottom-10 z-10 group-hover:visible text-xs">
          Click Me to See
        </span>
          <Link href="https://lapaztravels.wordpress.com/" className="relative bottom-10 left-10">
            <PiVanDuotone size={24} color={'#b39180'} />
          </Link>
      </div>

      <div className="w-full max-w-sm mx-auto flex justify-center">
        <Image
          src={faceOne}
          alt="image of the author"
          className="my-2"
          width={174}
          height={174}
        />
      </div>
      <p className="max-w-sm mx-auto text-sm tracking-tight subpixel-antialiased my-4">
        I work mostly with TypeScript & JavaScript, React, and the rich ecosystem of tools orbitting them, such as NextJS, Webpack, Babel, etc. I spend a lot of my time with the NodeJS runtime enviroment. The more I learn, the more I see how profound of an influence it has had.
      </p>
      <div className="max-w-sm absolute bottom-2 right-6">
       <Image
          src={caty}
          alt="image of the author"
          className="max-w-sm absolute bottom-2 right-6"
          width={95}
          height={95}
        />
      </div>
      {/*  */}
    </div>
  );
}
