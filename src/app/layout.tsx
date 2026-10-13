import type { Metadata } from 'next';
import './globals.css';
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alessandro Perchiazzi',
  description: 'Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${albertSans.className} motion-safe:scroll-smooth`}
    >
      <body className="bg-bg text-strong">{children}</body>
    </html>
  );
}
