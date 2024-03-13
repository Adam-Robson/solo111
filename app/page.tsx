'use client'
import SocialIconLinks from './components/SocialIconLinks'
import TitleCard from './components/TitleCard'
import DarkModeEl from './components/DarkModeEl';

export default function Home() {
  return (
    <main className="h-full max-w-full">
      <div className="full-size-background"></div>
      <TitleCard />
      <div className="absolute bottom-0 h-32 w-full flex justify-between items-end px-6">
        <DarkModeEl />
        <SocialIconLinks />
      </div>
    </main>
  )
}
