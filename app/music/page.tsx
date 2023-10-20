import Link from 'next/link';
import { PiArrowLeftDuotone } from 'react-icons/pi';

export default function MusicPage() {
  return (
    <div className="fade min-h-screen w-11/12 mx-auto px-6">
      <Link className="absolute top-4 left-6" href="/">
        <PiArrowLeftDuotone size={24} color={'#b39180'} />
      </Link>
      <div className="w-full flex justify-center">
        <h1 className="text-7xl font-light text-center subpixel-antialiased tracking-tight my-6 underline underline-offset-[2.12rem] decoration-0">music</h1>
      </div>
      <div className="max-w-xl w-full mx-auto my-6">
          <iframe id='AmazonMusicEmbedB08BSY6LSP' src='https://music.amazon.com/embed/B08BSY6LSP/?id=zfw4McDXR2&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='100%' height='430px' frameBorder='0' className="mt-12 rounded-md border-2 border-black-700 max-w-md"></iframe>
      </div>
    </div>
  );
}
