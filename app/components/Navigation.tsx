'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '../lib/data';

export default function Navigation() {

  const pathname = usePathname();
  const getPathname = (link: string) => {
    switch (link) {
      case 'home': return '/';
      case 'about': return '/about';
      case 'contact': return '/contact';
      case 'more': return '/more';
      default: return '/';
    }
  };

  return (
    <header className="h-20 w-full max-w-4xl my-7 mx-auto flex justify-center">
      <nav className="p-4 w-full">
        <ul>
          {navigationLinks[pathname].map((navigationLink) => (
            <li key={navigationLink}>
              <Link
                className="text text-base sm:text-xl md:text-2xl subpixel-antialiased"
                href={getPathname(navigationLink)}
              >
                {navigationLink}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
