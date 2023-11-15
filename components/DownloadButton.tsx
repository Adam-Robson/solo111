'use client'
import { PiFloppyDiskDuotone } from 'react-icons/pi'

export default function DownloadButton() {
  const documentUrl = `/pdf/resume.pdf`;
  const documentName = `${Date.now()}_robson_resume.pdf`

  function handleDownload() {
    const blob = new Blob([documentUrl], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <p className="text-sm subpixeled-antialiased">
        Click on the icon to download the document:
      </p>
      <PiFloppyDiskDuotone onClick={handleDownload} size={30} />
    </div>
  );
};
