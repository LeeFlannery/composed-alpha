'use client';

import { motion } from 'framer-motion';
import { Portfolio } from '@/lib/storyblok';
import PortfolioCard from './PortfolioCard';

interface PortfolioGridProps {
  portfolios: Portfolio[] | { id: string; content: Portfolio['content'] }[];
}

export default function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  const featuredPortfolios = portfolios.filter((p) => p.content.featured);
  const regularPortfolios = portfolios.filter((p) => !p.content.featured);

  return (
    <div className="space-y-8">
      {featuredPortfolios.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="space-y-6">
            {featuredPortfolios.map((portfolio, index) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
            ))}
          </div>
        </motion.section>
      )}

      {regularPortfolios.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {featuredPortfolios.length > 0 ? 'More Projects' : 'Projects'}
          </h2>
          <div className="space-y-6">
            {regularPortfolios.map((portfolio, index) => (
              <PortfolioCard
                key={portfolio.id}
                portfolio={portfolio}
                index={featuredPortfolios.length + index}
              />
            ))}
          </div>
        </motion.section>
      )}

      {portfolios.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No projects yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Portfolio items will appear here once added to Storyblok.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
