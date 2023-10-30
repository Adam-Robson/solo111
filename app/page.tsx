import Icons from '@/components/Icons'
import TitleCard from '@/components/TitleCard'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-20" style={{
      backgroundImage: "url('/images/circlesun.png')",
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundClip: 'border-box',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
        <TitleCard />
      <div className="absolute bottom-6 left-3/4">
        <Icons />
      </div>
    </main>
  )
}
