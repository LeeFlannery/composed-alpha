import { Suspense } from 'react';
import HeroCard from '@/components/HeroCard';
import PortfolioGrid from '@/components/PortfolioGrid';

// Demo data - replace with Storyblok data in production
const demoProfile = {
  content: {
    name: 'Alex Rivera',
    title: 'Full-Stack Developer & Game Designer',
    bio: 'Passionate creator building innovative digital experiences. Specializing in React, Node.js, and Unity game development with 5+ years of experience shipping products that users love.',
    avatar: {
      filename:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      alt: 'Alex Rivera',
    },
    social_links: [
      { platform: 'GitHub', url: 'https://github.com/alexrivera', username: 'alexrivera' },
      { platform: 'Twitter', url: 'https://twitter.com/alexrivera', username: '@alexrivera' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/alexrivera', username: 'alexrivera' },
    ],
    location: 'San Francisco, CA',
    skills: ['React', 'TypeScript', 'Node.js', 'Unity', 'Python', 'AWS', 'PostgreSQL'],
  },
};

const demoPortfolios = [
  {
    id: 'cosmic-runner',
    content: {
      title: 'Cosmic Runner',
      description:
        'An endless runner game built with Unity featuring procedural level generation and smooth physics-based movement. Published on mobile platforms with over 100K downloads.',
      screenshot: {
        filename:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
        alt: 'Cosmic Runner Screenshot',
      },
      stats: [
        { label: 'Downloads', value: '150000', type: 'number' as const },
        { label: 'Rating', value: '4.5', type: 'number' as const },
        { label: 'Revenue', value: '25000', type: 'currency' as const },
      ],
      technologies: ['Unity', 'C#', 'Firebase', 'Unity Analytics'],
      links: [
        { type: 'app_store' as const, url: 'https://apps.apple.com/app/cosmic-runner' },
        { type: 'play_store' as const, url: 'https://play.google.com/store/apps/cosmic-runner' },
      ],
      category: 'game' as const,
      featured: true,
      launch_date: '2023-08-15',
    },
  },
  {
    id: 'task-flow',
    content: {
      title: 'TaskFlow Pro',
      description:
        'A modern project management web application built with React and Node.js. Features real-time collaboration, advanced analytics, and intuitive drag-and-drop interfaces.',
      screenshot: {
        filename:
          'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        alt: 'TaskFlow Pro Screenshot',
      },
      stats: [
        { label: 'Active Users', value: '5000', type: 'number' as const },
        { label: 'Task Completion', value: '94.2', type: 'percentage' as const },
        { label: 'MRR', value: '12000', type: 'currency' as const },
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
      links: [
        { type: 'website' as const, url: 'https://taskflow-pro.com' },
        { type: 'github' as const, url: 'https://github.com/alexrivera/taskflow-pro' },
      ],
      category: 'app' as const,
      featured: true,
      launch_date: '2023-05-20',
    },
  },
  {
    id: 'portfolio-showcase',
    content: {
      title: 'Developer Portfolio Platform',
      description:
        "The very platform you're viewing! A modern portfolio showcase built with Next.js, Storyblok, and composable UI components. Features dynamic content management and beautiful animations.",
      screenshot: {
        filename:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        alt: 'Portfolio Platform Screenshot',
      },
      stats: [
        { label: 'Page Views', value: '50000', type: 'number' as const },
        { label: 'Load Speed', value: '98', type: 'percentage' as const },
        { label: 'Conversion', value: '15.8', type: 'percentage' as const },
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storyblok', 'Framer Motion'],
      links: [
        { type: 'website' as const, url: '#' },
        { type: 'github' as const, url: 'https://github.com/alexrivera/composed-alpha' },
      ],
      category: 'website' as const,
      featured: false,
      launch_date: '2024-01-10',
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12">
          <Suspense
            fallback={
              <div className="w-full h-96 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl animate-pulse" />
            }
          >
            <HeroCard profile={demoProfile} />
          </Suspense>
        </section>

        {/* Portfolio Section */}
        <section>
          <Suspense
            fallback={
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl h-64 animate-pulse" />
                ))}
              </div>
            }
          >
            <PortfolioGrid portfolios={demoPortfolios} />
          </Suspense>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Built with Next.js, Storyblok, and modern web technologies
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>© 2024 Composed Alpha</span>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
