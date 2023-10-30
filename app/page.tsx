import Icons from '@/components/Icons'
import TitleCard from '@/components/TitleCard'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <TitleCard />
      <div className="absolute bottom-6 right-12">
        <Icons />
      </div>
    </main>
  )
}
