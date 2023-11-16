'use client'
import Link from 'next/link';
import { PiFloppyDiskDuotone } from 'react-icons/pi'

export default function DownloadButton() {
  const documentUrl = `/pdf/resume.pdf`;
  const documentName = `${Date.now()}_robson_resume.pdf`

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <p className="text-sm/4 sm:text-base/5 md:text-lg/7 subpixeled-antialiased">
        Click on the icon to download the document:
      </p>
      <Link href={documentUrl} download={documentName}>
        <PiFloppyDiskDuotone size={40} />
      </Link>
    </div>
  );
};
