
'use client';

import { HeroSection } from '@/components/home/HeroSection';
import { QuickAbout } from '@/components/home/QuickAbout';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { LoadingProvider } from '@/components/providers/LoadingProvider';

export default function Home() {
  return (
    <LoadingProvider>
      <div className="min-h-screen">
        <HeroSection />
        <QuickAbout />
        <FeaturedProjects />
      </div>
    </LoadingProvider>
  );
}
