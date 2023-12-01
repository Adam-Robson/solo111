import TitleCard from './TitleCard';
import Navigation from './Navigation';
import SocialIcons from './SocialIcons';

export default function Home() {
  return (
    <section className="max-w-full">
      <header data-testid="header-element">
        <Navigation />
      </header>
      <main style={ { backgroundImage: '../assets/sun.png' } }>
        <TitleCard />
      </main>
      <SocialIcons />
    </section>
  );
}
