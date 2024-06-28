import Link from 'next/link';
import ImageCycle from '../components/ImageCycle';
import TextCycle from '../components/TextCycle';

export default function AboutPage() {
  return (
    <div className="container flex flex-col min-h-full px-6">
      <div className="flex flex-col md:flex-row flex-1 my-6">
        <section className="flex flex-1 justify-center items-center">
          <ImageCycle />
        </section>
        <section className="flex flex-1 justify-center items-center">
          <TextCycle />
        </section>
      </div>
      <div className="fixed bottom-0 text-center w-full p-6">
        find out more about neurodiversity
        <Link href="https://neuroqueer.com/neurodiversity-terms-and-definitions/" target="_blank">here</Link> or
        <Link href="https://www.neurodiversityhub.org/"
          target="_blank">here</Link>
      </div>

    </div>
  );
}
