import Link from "next/link";
import { writings } from "../utils/data/store";
import { PiArrowLeftDuotone } from "react-icons/pi";
export default function WritingsPage() {

    const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link
        className="text-2xl subpixel-antialiased"
        href={`/${writing.alias}`}
      >
        {writing.alias}
      </Link>
    </li>
    ));


  return (
    <div className="min-h-screnn w-11/12 mx-auto fade px-6 overflow-hidden">
      <div className="relative">
        <Link className="absolute top-0 left-2 sm:top-4 sm:left-8" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>
      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6">writings</h1>
      </div>
      <ul
        className=""
      >{list}</ul>
    </div>
  );
}
