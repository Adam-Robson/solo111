import Link from 'next/link';
import { PiFloppyDiskDuotone } from 'react-icons/pi'

export default function DownloadButton() {
  const documentUrl = `/pdf/resume.pdf`;
  const documentName = `${Date.now()}_robson_resume.pdf`

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <Link href={documentUrl} download={documentName}>
        <PiFloppyDiskDuotone size={40} color={'var(--primary)'} />
      </Link>
      <p className="text-sm/4 sm:text-base/5 md:text-lg/7 subpixeled-antialiased">
        Download
      </p>
    </div>
  );
};
