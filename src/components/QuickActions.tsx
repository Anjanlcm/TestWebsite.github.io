import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  Bookmark, 
  Compass, 
  Share2, 
  Phone, 
  Utensils, 
  ShoppingBag, 
  XCircle, 
  Car, 
  Tv, 
  Users, 
  Check, 
  Sparkles,
  Heart
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';

interface QuickActionsProps {
  lang: Language;
  onOpenShare: () => void;
  onOpenNearby: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  lang,
  onOpenShare,
  onOpenNearby,
}) => {
  const t = translations[lang];
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('bar_g_saved') === 'true';
    setIsSaved(saved);
  }, []);

  const handleToggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    localStorage.setItem('bar_g_saved', String(nextSaved));

    const msg = nextSaved
      ? (lang === 'fi' ? 'Tallennettu suosikkeihin!' : 'Saved to your favorites!')
      : (lang === 'fi' ? 'Poistettu suosikeista' : 'Removed from favorites');
    
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold shadow-xl border border-stone-700 flex items-center gap-2 animate-bounce">
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Actions Bar (White card with refined shadow and borders) */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200/90 shadow-xl shadow-stone-200/50">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {/* Directions */}
          <a
            id="qa-directions"
            href={BAR_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200/80 transition-all hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="mt-2 text-xs font-bold text-stone-900">
              {t.quickActions.directions}
            </span>
            <span className="text-[10px] text-sky-700 font-medium">Google Maps</span>
          </a>

          {/* Save */}
          <button
            id="qa-save"
            onClick={handleToggleSave}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border transition-all hover:-translate-y-0.5 group cursor-pointer ${
              isSaved
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${
                isSaved
                  ? 'bg-amber-500 text-white shadow-amber-500/25'
                  : 'bg-stone-200 text-stone-700'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} />
            </div>
            <span className="mt-2 text-xs font-bold text-stone-900">
              {isSaved ? (lang === 'fi' ? 'Tallennettu' : 'Saved') : t.quickActions.save}
            </span>
            <span className="text-[10px] text-stone-500 font-medium">
              {isSaved ? '★' : t.quickActions.saveHint}
            </span>
          </button>

          {/* Nearby */}
          <button
            id="qa-nearby"
            onClick={onOpenNearby}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/80 transition-all hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="mt-2 text-xs font-bold text-stone-900">
              {t.quickActions.nearby}
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">LUT Campus</span>
          </button>

          {/* Share */}
          <button
            id="qa-share"
            onClick={onOpenShare}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200/80 transition-all hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="mt-2 text-xs font-bold text-stone-900">
              {t.quickActions.share}
            </span>
            <span className="text-[10px] text-purple-700 font-medium">QR & Link</span>
          </button>

          {/* Call */}
          <a
            id="qa-call"
            href={`tel:${BAR_CONTACT.phone.replace(/\s+/g, '')}`}
            className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200/80 transition-all hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="mt-2 text-xs font-bold text-stone-900">
              {t.quickActions.call}
            </span>
            <span className="text-[10px] text-amber-800 font-medium">{BAR_CONTACT.phone}</span>
          </a>
        </div>

        {/* Google Maps Attributes Strip */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 font-semibold border border-stone-200">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dine-in (Paikan päällä)</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 font-semibold border border-stone-200">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Takeaway (Nouto)</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 text-stone-400 font-medium border border-stone-200/60 line-through">
              <XCircle className="w-3.5 h-3.5 text-stone-400" />
              <span>Delivery (Ei kotiinkuljetusta)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-stone-500 font-medium text-[11px]">
            <span className="flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'fi' ? 'Esteetön pysäköinti' : 'Accessible parking'}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Tv className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'fi' ? 'Urheilu screenillä' : 'Sports broadcasts'}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
