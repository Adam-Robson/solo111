import Image from 'next/image'
import sun from '../public/img/sun.png'
import IconLinks from './components/IconLinks'
import Nav from './components/Nav'
import TitleCard from './components/TitleCard'

export default function Home() {
  return (
    <main className="fade flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-0 left-0">
        <Nav />
      </div>

      <div className="h-full max-w-3xl mx-auto w-full">
        <Image
          src={sun}
          alt="background image | abstract sun"
          sizes="100vw (max-width: 700px) 700px"
          className="-z-10 w-full p-2"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <TitleCard />

      <div className="max-w-lg w-2/5 absolute bottom-4 right-4">
        <IconLinks />
      </div>
    </main>
  )
}
