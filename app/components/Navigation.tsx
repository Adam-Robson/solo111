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
      case 'also': return '/also';
      default: return '/';
    }
  };

  return (
    <header className="">
      <nav>
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
