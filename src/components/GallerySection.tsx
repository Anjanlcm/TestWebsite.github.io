import React, { useState } from 'react';
import { 
  Camera, 
  Plus, 
  X, 
  Check, 
  Sparkles, 
  Maximize2, 
  Tag, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { Language, GalleryCategory, GalleryPhoto } from '../types';
import { translations } from '../data/translations';
import { GALLERY_PHOTOS } from '../data/barData';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  
  // Custom user photo state
  const [photosList, setPhotosList] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [userTitle, setUserTitle] = useState('');
  const [userCategory, setUserCategory] = useState<GalleryCategory>('vibe');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'food_drink', label: t.gallery.filterFoodDrink },
    { id: 'vibe', label: t.gallery.filterVibe },
    { id: 'french_fries', label: t.gallery.filterFries },
    { id: 'pitchers', label: t.gallery.filterPitchers },
    { id: 'campus', label: t.gallery.filterCampus },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photosList
    : photosList.filter((p) => p.category === activeCategory);

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userTitle.trim()) return;

    const newPhoto: GalleryPhoto = {
      id: `user-photo-${Date.now()}`,
      category: userCategory,
      title: {
        fi: userTitle.trim(),
        en: userTitle.trim(),
      },
      caption: {
        fi: 'Kävijän lisäämä kuva Google Mapsissa',
        en: 'Visitor uploaded photo on Google Maps',
      },
      imageUrl: '/src/assets/images/cafe_bar_g_bright_1790073735606.jpg',
      tagText: 'Visitor Upload',
    };

    setPhotosList([newPhoto, ...photosList]);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setUploadModalOpen(false);
      setUserTitle('');
    }, 1500);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.gallery.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-xl">
              {t.gallery.subtitle}
            </p>
          </div>

          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-md transition-all self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>{t.gallery.addPhotoBtn}</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'bg-stone-100 text-stone-700 border border-stone-200 hover:bg-stone-200/70 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay with subtle light gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    {photo.tagText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                    {photo.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs text-stone-300 line-clamp-2">
                    {photo.caption[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-stone-900">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title[lang]}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {selectedPhoto.tagText}
                </span>
                <h3 className="font-display font-bold text-xl text-stone-900 mt-1">
                  {selectedPhoto.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {selectedPhoto.caption[lang]}
                </p>
              </div>

              <div className="shrink-0 text-xs text-stone-400 font-medium">
                Cafe Bar G · Google Maps Photo
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Photo Modal */}
      {uploadModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setUploadModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-display font-bold text-lg text-stone-900">
                {t.gallery.addPhotoTitle}
              </h3>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {uploadSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-lg text-stone-900">
                  {t.gallery.uploadSuccess}
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSimulateUpload} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {t.gallery.photoTitleLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    placeholder={lang === 'fi' ? 'Esim. Perjantain kannut kavereiden kanssa' : 'e.g. Friday pitchers with friends'}
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {t.gallery.categoryLabel}
                  </label>
                  <select
                    value={userCategory}
                    onChange={(e) => setUserCategory(e.target.value as GalleryCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
                  >
                    <option value="vibe">{t.gallery.filterVibe}</option>
                    <option value="pitchers">{t.gallery.filterPitchers}</option>
                    <option value="food_drink">{t.gallery.filterFoodDrink}</option>
                    <option value="french_fries">{t.gallery.filterFries}</option>
                    <option value="campus">{t.gallery.filterCampus}</option>
                  </select>
                </div>

                <div className="p-4 rounded-xl border-2 border-dashed border-stone-300 text-center space-y-2 bg-stone-50">
                  <Camera className="w-8 h-8 text-stone-400 mx-auto" />
                  <div className="text-xs font-semibold text-stone-700">
                    {lang === 'fi' ? 'Vedä kuva tähän tai valitse laitteeltasi' : 'Drag photo here or select from device'}
                  </div>
                  <div className="text-[10px] text-stone-400">
                    JPG, PNG, WebP (Max 10MB)
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-md shadow-amber-600/20 active:scale-95 cursor-pointer"
                >
                  {t.gallery.uploadBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
