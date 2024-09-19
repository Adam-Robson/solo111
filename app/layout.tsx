import type { Metadata } from 'next';
import { Lato, Ruda } from 'next/font/google';
import './reset.css';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] });
const ruda = Ruda({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'adam robson',
  description: 'initialized with create next app'
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ruda.className} ${lato.className}`}>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
