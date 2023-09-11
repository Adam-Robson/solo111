import TitleCard from './TitleCard';
import Header from './Header';
import SocialIcons from './SocialIcons';


export default function Home() {

  return (
    <section className="max-w-full">
      <Header />
      <main>
        <TitleCard />
      </main>
      <SocialIcons />
    </section>
  );
}
