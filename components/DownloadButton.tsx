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
    <div>
      <p className="text-sm subpixeled-antialiased">
        Click on the icon to download the document:
      </p>
      <button onClick={handleDownload}>
        <PiFloppyDiskDuotone size={30} color={'#b39180'} />
      </button>
    </div>
  );
};

