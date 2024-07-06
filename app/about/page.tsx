import Link from 'next/link';
import Navigation from '../components/Navigation';
import About from '../components/About';
import SocialIcons from '../components/SocialIcons';

export default function AboutPage() {
  return (
    <div className="h-full flex flex-col items-center justify-start w-full mx-auto">
      <Navigation />
      <About />
      <SocialIcons />
    </div>
  )
}
