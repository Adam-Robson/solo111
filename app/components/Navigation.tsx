'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '../lib/data';
import { NavigationLink } from '@/lib/types';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="h-20 w-full max-w-screen-md mx-auto flex justify-between items-center z-50 p-12">
      <nav className="p-4 w-full">
        <ul>
          {navigationLinks
            .filter((link: NavigationLink) => link.path !== pathname)
            .map((link: NavigationLink) => (
              <li
                key={link.path}
                className="z-10 text-base md:text-lg lg:text-xl subpixel-antialiased"
              >
                <Link href={link.path} title={link.title}>
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
