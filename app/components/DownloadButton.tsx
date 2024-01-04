import Link from 'next/link';
import { PiFloppyDiskDuotone } from 'react-icons/pi'

export default function DownloadButton() {
  const documentUrl = `/pdf/resume.pdf`;
  const documentName = `${Date.now()}_robson_resume.pdf`

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <Link href={documentUrl} download={documentName} className="flex flex-col justify-center items-center text-center">
        <PiFloppyDiskDuotone size={40} color={'var(--primary)'} />
        <span className="text-sm subpixel-antialiased">Download</span>
      </Link>
      <p className="text-sm/4 sm:text-base/5 md:text-lg/7 subpixeled-antialiased">
        Take a copy with you!
      </p>
    </div>
  );
};
