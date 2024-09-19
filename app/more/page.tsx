import More from '../components/More';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons';

export default function MorePage() {
  return (
    <div className="h-screen max-w-screen-md mx-auto w-full flex flex-col justify-between items-center">
      <Navigation />
      <More />
      <SocialIcons />
    </div>
  );
}
