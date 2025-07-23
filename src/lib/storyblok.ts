import { storyblokInit, apiPlugin, getStoryblokApi, ISbStoryData } from '@storyblok/react';

// Initialize Storyblok with API plugin
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

// Storyblok API instance
export const storyblokApi = getStoryblokApi();

// Types for our content models
export interface DeveloperProfile extends ISbStoryData {
  content: {
    name: string;
    title: string;
    bio: string;
    avatar: {
      filename: string;
      alt: string;
    };
    social_links: Array<{
      platform: string;
      url: string;
      username: string;
    }>;
    location: string;
    skills: string[];
  };
}

export interface Portfolio extends ISbStoryData {
  content: {
    title: string;
    description: string;
    screenshot: {
      filename: string;
      alt: string;
    };
    stats: Array<{
      label: string;
      value: string;
      type: 'number' | 'percentage' | 'currency';
    }>;
    technologies: string[];
    links: Array<{
      type: 'website' | 'github' | 'app_store' | 'play_store';
      url: string;
    }>;
    category: 'game' | 'app' | 'website';
    featured: boolean;
    launch_date: string;
  };
}

// Utility functions for fetching content
export async function getDeveloperProfile(
  slug: string = 'developer'
): Promise<DeveloperProfile | null> {
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION as 'draft' | 'published') || 'published',
    });
    return data.story;
  } catch (error) {
    console.error('Error fetching developer profile:', error);
    return null;
  }
}

export async function getPortfolioItems(): Promise<Portfolio[]> {
  try {
    const { data } = await storyblokApi.get('cdn/stories', {
      starts_with: 'portfolio/',
      version: (process.env.NEXT_PUBLIC_STORYBLOK_VERSION as 'draft' | 'published') || 'published',
      sort_by: 'content.featured:desc,content.launch_date:desc',
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}
