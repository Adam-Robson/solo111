import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons';

export default function ContactPage() {
  return (
    <div className='h-screen max-w-screen-md mx-auto w-full flex flex-col justify-between items-center'>
      <Navigation />
      <Contact />
      <SocialIcons />
    </div>
  )
}
