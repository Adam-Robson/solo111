import { Link, useNavigate } from 'react-router-dom';
import LazyImageLoader from '../LazyImageLoader';

import resume from '../../assets/res.png';

export default function Resume() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }
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
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="absolute top-6 right-6 subpixel-antialiased border border-cyan-300" to="/">home</button>
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">resume</h1>
      <div className="flex flex-col mx-auto max-w-md">
        <Link
          download
          className="px-6 pb-4 flex justify-center"
          onClick={handleDownload}>
          download
        </Link>
        <LazyImageLoader
          src={resume}
          id="download"
          className="mx-auto pb-6"
          alt="resume page"
        />
      </div>
    </section>
  );
}
