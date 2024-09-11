import Home from '@/components/Home';
import Navigation from '@/components/Navigation';
import SocialIcons from '@/components/SocialIcons';

export default function HomePage() {
  return (
    <div className="h-full max-w-screen-xl mx-auto w-full flex flex-col justify-between items-center">
      <Navigation />
      <Home />
      <SocialIcons />
    </div>
  );
}
