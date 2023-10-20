import Image from 'next/image';
import Link from 'next/link';
import { PiArrowLeftDuotone, PiVanDuotone } from 'react-icons/pi';
import caty from '../../public/caty.png';
import faceOne from '../../public/slvrfls.png';

export default function BioPage() {
  return (
    <div className="fade min-h-screen w-11/12 mx-auto px-6">
      <Link className="absolute top-4 left-6" href="/">
        <PiArrowLeftDuotone size={24} color={'#b39180'} />
      </Link>
      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[2.12rem] decoration-0">bio</h1>
      </div>
      <article className="border-4 border-purple-600 max-w-md mx-auto flex flex-col items-center">
        <p className="max-w-sm mx-auto text-sm tracking-tight subpixel-antialiased my-4">
          Born and raised in south California, I spent my young adult years in the Bay Area where I did my undergraduate studies. I would soon meet my partner and shortly after that, we two travelled around without aim in a 1980 Aircooled Volkswagen Vanagon, working remotely and exploring the country. It was a truly unique and singular experience. Click on the icon below to see some of our account of that trip!
        </p>
        <Link href="https://lapaztravels.wordpress.com/" target="_blank">
          <PiVanDuotone size={30} color={'#b39180'} />
        </Link>

        <div className="bg-slate-800 rounded-sm inline-block relative w-32 px-2 group z-10">
          <span className="invisible w-24 text-center px-2 py-0 rounded-sm absolute z-10 group-hover:visible text-xs">
            Click Me to See
          </span>
        </div>

      </article>
      <div className="w-full max-w-sm mx-auto flex justify-center mt-8">
        <Image
          src={faceOne}
          alt="image of the author"
          className="my-2 opacity-50"
          width={213}
          height={213}
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
