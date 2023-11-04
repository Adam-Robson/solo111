import SocialIconLinks from '@/components/SocialIconLinks'
import TitleCard from '@/components/TitleCard'
import Container from '@/components/Container'

export default function Home() {
  return (
     <>
      <Container>
        <main className="min-h-full max-w-full">
          <div className="full-size-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <TitleCard />
            </div>
            <div className="absolute bottom-6 right-4">
              <SocialIconLinks />
            </div>
          </div>
        </main>
      </Container>
    </>
  )
}
