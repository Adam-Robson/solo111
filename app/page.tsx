import Image from 'next/image'
import Nav from './components/Nav'
import IconLinks from './components/IconLinks'
import sun from '../public/sun.png'

 
export default function Home() {
  return (
    <main className="fade flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-0 left-0">
        <Nav />
      </div>
      <div className="h-full max-w-3xl relative w-full">
        <Image
          src={sun}
          alt="background image | abstract sun"
          sizes="100vw (max-width: 700px) 700px"
          className="-z-10 w-full"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    <div className="max-w-lg w-2/5 absolute bottom-4 right-4">
      <IconLinks />
    </div>
  </main>
  )
}
