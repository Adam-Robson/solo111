import Link from 'next/link'
import { PiArrowLeftDuotone, PiFloppyDiskDuotone } from 'react-icons/pi'
import PDF from '../components/PDF'

export default function ResumePage() {

  return (
    <div className="fade min-h-screen w-11/12 mx-auto px-6">
      <div className="relative">
        <Link className="absolute top-0 left-0" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>

      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased underline underline-offset-[2.12rem] decoration-0">resume</h1>
      </div>

      <div className="relative max-w-lg mx-auto mt-8 mb-2 flex justify-center">
        <Link
          href="/pdf/resume.pdf"
          download="resume.pdf"
          className="flex items-center"
        >
          <PiFloppyDiskDuotone size={30} color={'#b39180'} />
          Download
        </Link>
      </div>
        <PDF />
    </div>
  );
}
