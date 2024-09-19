import Home from '@/components/Home';
import Navigation from '@/components/Navigation';
import SocialIcons from '@/components/SocialIcons';

export default function HomePage() {
  return (
    <div className="min-h-full max-w-screen-xl mx-auto w-full flex flex-col justify-between items-center flex-1">
      <Navigation />
      <Home />
      <SocialIcons />
    </div>
  );
}
