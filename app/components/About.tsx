'use client';
import Image from 'next/image';
import TextCycle from './TextCycle';
import DownloadButton from './DownloadButton';

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full h-full mx-auto max-w-screen-sm">
      <div className="w-full flex flex-col sm:flex-1 sm:flex-row justify-center items-center">
        <Image
          src="/images/adaam.png"
          alt="image of the author"
          width="350"
          height="350"
          className="rounded-lg shadow-xl"
        />
        <section className="w-full flex flex-col flex-1">
          <TextCycle />
        </section>
      </div>

      <DownloadButton />
    </div>
  );
}
