import React, { useState, useEffect } from 'react';
import { Language, ReviewItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutAndHoursSection } from './components/AboutAndHoursSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MidnightModal } from './components/MidnightModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { ShareModal } from './components/ShareModal';
import { NearbyModal } from './components/NearbyModal';

export default function App() {
  const [lang, setLang] = useState<Language>('fi');
  const [reservationOpen, setReservationOpen] = useState(false);
  const [midnightModalOpen, setMidnightModalOpen] = useState(false);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [nearbyModalOpen, setNearbyModalOpen] = useState(false);

  // Load language preference if set
  useEffect(() => {
    const savedLang = localStorage.getItem('bar_g_lang') as Language;
    if (savedLang === 'fi' || savedLang === 'en') {
      setLang(savedLang);
    }
  }, []);

  const handleToggleLang = () => {
    const nextLang: Language = lang === 'fi' ? 'en' : 'fi';
    setLang(nextLang);
    localStorage.setItem('bar_g_lang', nextLang);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    // WriteReviewModal handles state and closes
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-amber-600 selection:text-white flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenReservation={() => setReservationOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenReservation={() => setReservationOpen(true)}
          onOpenMidnightModal={() => setMidnightModalOpen(true)}
        />

        {/* Google Maps Actions Bar (Directions, Save, Nearby, Send to phone, Share) */}
        <QuickActions
          lang={lang}
          onOpenShare={() => setShareModalOpen(true)}
          onOpenNearby={() => setNearbyModalOpen(true)}
        />

        {/* Food & Drink Menu Section */}
        <MenuSection
          lang={lang}
          onSelectForReservation={() => setReservationOpen(true)}
        />

        {/* Photos & Videos Gallery Section */}
        <GallerySection lang={lang} />

        {/* Google Reviews & Breakdown Section */}
        <ReviewsSection
          lang={lang}
          onOpenWriteReview={() => setWriteReviewOpen(true)}
        />

        {/* About, Opening Hours & Location Section */}
        <AboutAndHoursSection
          lang={lang}
          onOpenReservation={() => setReservationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Modals */}
      <ReservationModal
        lang={lang}
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <MidnightModal
        lang={lang}
        isOpen={midnightModalOpen}
        onClose={() => setMidnightModalOpen(false)}
      />

      <WriteReviewModal
        lang={lang}
        isOpen={writeReviewOpen}
        onClose={() => setWriteReviewOpen(false)}
        onAddReview={handleAddReview}
      />

      <ShareModal
        lang={lang}
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      <NearbyModal
        lang={lang}
        isOpen={nearbyModalOpen}
        onClose={() => setNearbyModalOpen(false)}
      />
    </div>
  );
}
