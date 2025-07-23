import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Composed Alpha - Developer Portfolio Platform',
  description:
    'A modern, composable portfolio platform showcasing developer projects with interactive visualizations and beautiful design. Built with Next.js, Storyblok, and cutting-edge web technologies.',
  keywords: ['portfolio', 'developer', 'games', 'apps', 'react', 'nextjs', 'storyblok'],
  authors: [{ name: 'Composed Alpha' }],
  creator: 'Composed Alpha',
  openGraph: {
    title: 'Composed Alpha - Developer Portfolio Platform',
    description:
      'Showcase your projects with style. A modern portfolio platform for developers and creators.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Composed Alpha - Developer Portfolio Platform',
    description:
      'Showcase your projects with style. A modern portfolio platform for developers and creators.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
