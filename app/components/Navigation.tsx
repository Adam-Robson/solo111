'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '../lib/data';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="h-20 w-full max-w-4xl my-7 mx-auto flex justify-center z-50">
      <nav className="p-4 w-full">
        <ul>
          {
            navigationLinks
              .filter(link => link.path !== pathname)
              .map(link => (
                <li key={link.path} className='z-10'>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))
          }
        </ul>
      </nav>
    </header>
  )
}
