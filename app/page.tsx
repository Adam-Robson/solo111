import Home from './components/Home';
import Navigation from './components/Navigation';
import SocialIcons from './components/SocialIcons';

export default function HomePage() {
  return (
    <div className="h-full flex flex-col items-center justify-start w-full mx-auto">
      <Navigation />
      <Home />
      <SocialIcons />
    </div>
  )
}
