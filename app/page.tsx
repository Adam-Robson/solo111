import SocialIconLinks from '@/components/SocialIconLinks'
import TitleCard from '@/components/TitleCard'
export default function Home() {
  return (
    <main
      className="flex min-h-screen max-w-5xl mx-auto"
      // style={{ backgroundImage: `url('/images/sun.png')` }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <TitleCard />
      </div>
      <div className="absolute bottom-6 left-3/4">
        <SocialIconLinks />
      </div>
    </main>
  )
}
