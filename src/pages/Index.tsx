import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import FavoritesSection from '@/components/FavoritesSection';
import WishWallSection from '@/components/WishWallSection';
import GallerySection from '@/components/GallerySection';
import FooterSection from '@/components/FooterSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <HeroSection />
      <TimelineSection />
      <FavoritesSection />
      <WishWallSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}