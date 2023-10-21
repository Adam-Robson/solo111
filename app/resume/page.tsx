import Link from 'next/link'
import { PiArrowLeftDuotone, PiFloppyDiskDuotone } from 'react-icons/pi'
import PDF from '../components/PDF'

export default function ResumePage() {
  return (
    <div className="">
      <div className="relative">
        <Link className="absolute top-4 left-8" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>
      <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6">resume</h1>

      <div className="max-w-3xl h-16 relative border-2 border-purple-300">
        <Link
          href="/pdf/resume.pdf"
          download="resume.pdf"
          className="absolute bottom-0"
        ><PiFloppyDiskDuotone size={36} color={'#b39180'} />
        </Link>
      </div>
        <PDF />
    </div>
  );
}
