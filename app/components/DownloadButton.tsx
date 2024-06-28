'use client';
import Link from 'next/link';
import { PiFilePdfDuotone } from 'react-icons/pi';

export default function DownloadButton() {
  const documentUrl = `/pdf/res.pdf`;
  const documentName = `${Date.now()}_res_arobson.pdf`

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <div className="min-h-16 h-16">
        <Link href={documentUrl} download={documentName} title="download resume to learn more about me" className="cursor-pointer flex flex-col justify-center items-center text-center text-xs sm:text-sm subpixel-antialiased mt-12" target="_blank">
          <PiFilePdfDuotone size={30} />downlaod resume
        </Link>
      </div>
    </div>
  );
};
