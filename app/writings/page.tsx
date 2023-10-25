import Link from 'next/link';
import { writings } from "../utils/data/store";
import { PiArrowLeftDuotone } from "react-icons/pi";
export default function WritingsPage() {

    const list = writings.map((writing) => (
    <li className="group" key={ writing.id }>
        <h3 className="group-hover:underline underline-offset-1 text-lg text-center subpixel-antialiased mt-8">{writing.alias}</h3>
        <p className="hidden group-hover:contents">{writing.body}</p>
    </li>
    ));


  return (
    <div className="min-h-screen w-11/12 mx-auto fade px-6 overflow-hidden">
      <div className="relative">
        <Link className="absolute top-0 left-2 sm:top-4 sm:left-8" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>
      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[2.12rem] decoration-0">writings</h1>
      </div>
      <ul
        className="h-80 w-full text-center my-8 flex flex-col items-center justify-evenly"
        >{list}</ul>
    </div>
  );
}
