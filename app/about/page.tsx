import Navigation from '../components/Navigation';
import About from '../components/About';
import SocialIcons from '../components/SocialIcons';

export default function AboutPage() {
  return (
    <div className='h-screen max-w-screen-md mx-auto w-full flex flex-col justify-between items-center'>
      <Navigation />
      <About />
      <SocialIcons />
    </div>
  )
}
