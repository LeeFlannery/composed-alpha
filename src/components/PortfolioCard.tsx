'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Portfolio } from '@/lib/storyblok';
import { formatDate, getStatDisplayValue, cn } from '@/lib/utils';
import StatChart from './StatChart';

interface PortfolioCardProps {
  portfolio: Portfolio | { id: string; content: Portfolio['content'] };
  index: number;
}

const categoryColors = {
  game: 'from-emerald-500 to-teal-600',
  app: 'from-blue-500 to-indigo-600',
  website: 'from-purple-500 to-pink-600',
};

const categoryLabels = {
  game: 'Game',
  app: 'Mobile App',
  website: 'Website',
};

export default function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
  const { content } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Screenshot */}
        <div className="lg:w-1/3 relative overflow-hidden">
          <div className="aspect-video lg:aspect-square relative">
            <Image
              src={content.screenshot?.filename || '/api/placeholder/400/300'}
              alt={content.screenshot?.alt || content.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {content.featured && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900 rounded-full">
                  Featured
                </span>
              </div>
            )}
            <div className="absolute top-3 right-3">
              <span
                className={cn(
                  'px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r',
                  categoryColors[content.category]
                )}
              >
                {categoryLabels[content.category]}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3 p-6 flex flex-col">
          <div className="flex-grow">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                {content.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{content.description}</p>
            </div>

            {/* Stats */}
            {content.stats && content.stats.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <StatChart value={parseFloat(stat.value)} type={stat.type} size={60} />
                        <div className="mt-2">
                          <div className="text-lg font-bold text-gray-900">
                            {getStatDisplayValue(stat.value, stat.type)}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {content.technologies && content.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {content.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4" />
              <span>Launched {formatDate(content.launch_date)}</span>
            </div>

            {content.links && content.links.length > 0 && (
              <div className="flex gap-2">
                {content.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200',
                      link.type === 'website'
                        ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                        : link.type === 'github'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    )}
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    {link.type === 'website' && 'View'}
                    {link.type === 'github' && 'Code'}
                    {link.type === 'app_store' && 'App Store'}
                    {link.type === 'play_store' && 'Play Store'}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
