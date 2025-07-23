'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, LinkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { DeveloperProfile } from '@/lib/storyblok';

interface HeroCardProps {
  profile: DeveloperProfile | { content: DeveloperProfile['content'] } | null;
}

export default function HeroCard({ profile }: HeroCardProps) {
  if (!profile) {
    return (
      <div className="w-full h-96 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl animate-pulse" />
    );
  }

  const { content } = profile;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <Image
                src={content.avatar?.filename || '/api/placeholder/120/120'}
                alt={content.avatar?.alt || content.name}
                width={128}
                height={128}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white/20 shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-3 border-white shadow-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-grow text-white">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl lg:text-5xl font-bold mb-2"
            >
              {content.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl lg:text-2xl text-white/90 mb-4"
            >
              {content.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white/80 text-lg mb-6 max-w-2xl leading-relaxed"
            >
              {content.bio}
            </motion.p>

            {/* Location and Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              {content.location && (
                <div className="flex items-center gap-2 text-white/80">
                  <MapPinIcon className="w-5 h-5" />
                  <span>{content.location}</span>
                </div>
              )}

              {content.social_links && content.social_links.length > 0 && (
                <div className="flex items-center gap-3">
                  {content.social_links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
                    >
                      <LinkIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">{link.platform}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Skills */}
            {content.skills && content.skills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-6"
              >
                <div className="flex flex-wrap gap-2">
                  {content.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
