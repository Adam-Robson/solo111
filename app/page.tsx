'use client';
import { useEffect, useState } from 'react';
import Home from '@/components/Home';
import Navigation from '@/components/Navigation';
import SocialIcons from '@/components/SocialIcons';
import Loader from './components/Loader';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full max-w-screen-xl mx-auto w-full flex flex-col justify-between items-center flex-1">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <Home />
          <SocialIcons />
        </>
      )}
    </div>
  );
}
