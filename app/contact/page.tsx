import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons';

export default function ContactPage() {
  return (
    <div className="h-full flex flex-col items-center justify-start w-full mx-auto">
      <Navigation />
      <Contact />
      <SocialIcons />
    </div>
  )
}
