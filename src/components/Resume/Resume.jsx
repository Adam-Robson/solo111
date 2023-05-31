import React, { useState } from 'react';
import resume from '../../assets/resume.png';

export default function Resume() {
  const [downloadResume, setDownloadResume] = useState('');
  
  function downloadNewFile() {
    const link = document.createElement('a');
    const file = new Blob([downloadResume], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = new Date() + 'Resume_Robson_Adam.pdf';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <>
      <div className="animate__fadeIn min-h-screen w-screen flex flex-col items-center justify-start">
        <img
          className="w-2/5 mx-auto md:mt-10"
          src={ resume }
          alt="resume"
        />
        <button onClick={ () => downloadNewFile() } type="button" className="download">
          download
        </button>
      </div>

    </>
  );
}
