import { Link } from 'react-router-dom';
import resume from '../assets/res.png';

export default function Resume() {
/**
 * create a function that we will
 * tuck into the onClick handler
 * of the download link to be
 * called if and only if the
 * visitor clicks the link;
 * the below image's src property
 * is given the value which will
 * be the target of our download
 */
  function handleDownload() {
    const img = document.getElementById('download');
    const url = img.src;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume_robson_adam.png';
    link.click();
  }
  return (
    <section className="mx-auto fadein px-6">
      <h1
        className="title text-7xl subpixel-antialiased">
        resume
      </h1>
      <div className="flex flex-col mx-auto max-w-lg">
        <Link
          download
          className="px-10 py-6 flex justify-center"
          onClick={handleDownload}>
          download
        </Link>
        <img
          data-testid="resume"
          src={resume}
          id="download"
          className="px-6"
          alt="resume page"
        />
      </div>
    </section>
  );
}
