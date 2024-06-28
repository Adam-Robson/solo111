import Link from 'next/link';
import ImageCycle from '../components/ImageCycle';
import TextCycle from '../components/TextCycle';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-screen-lg w-full mx-auto">

      <div className="flex flex-col md:flex-row flex-1 min-w-full">
        <section className="flex flex-1 justify-center items-center">
          <ImageCycle />
        </section>
        <section className="flex flex-1 justify-center items-center">
          <TextCycle />
        </section>
      </div>
      <div className="fixed bottom-4 w-full flex flex-col items-center justify-center">
        <p className="text text-sm sm:text-lg md:text-xl subpixel-antialiased">
          find out more about neurodiversity
          <Link href="https://neuroqueer.com/neurodiversity-terms-and-definitions/" target="_blank">{' '}here{' '}</Link> or
          <Link href="https://www.neurodiversityhub.org/"
            target="_blank">{' '}here{' '}</Link></p>
      </div>
    </div>
  );
}
