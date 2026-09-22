import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  ShieldCheck, 
  PenLine, 
  Check, 
  Users, 
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { Language, ReviewItem } from '../types';
import { translations } from '../data/translations';
import { REVIEWS, BAR_CONTACT } from '../data/barData';

interface ReviewsSectionProps {
  lang: Language;
  onOpenWriteReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, onOpenWriteReview }) => {
  const t = translations[lang];
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [sortBy, setSortBy] = useState<'highest' | 'newest'>('highest');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const tags = [
    { id: 'all', label: t.reviews.filterAll, count: 165 },
    { id: 'food', label: `${t.reviews.tagFood}`, count: 5 },
    { id: 'students', label: `${t.reviews.tagStudents}`, count: 4 },
    { id: 'owner', label: `${t.reviews.tagOwner}`, count: 4 },
    { id: 'pitchers', label: `${t.reviews.tagPitchers}`, count: 2 },
    { id: 'drink', label: `${t.reviews.tagDrink}`, count: 4 },
  ];

  const handleToggleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredReviews = reviewsList.filter((rev) => {
    if (selectedTag === 'all') return true;
    return rev.tags.includes(selectedTag as any);
  });

  return (
    <section id="reviews" className="py-20 bg-[#faf8f5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            <span>Google Maps Verified</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
            {t.reviews.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Rating Breakdown & Summary Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Overall Rating Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-display font-extrabold text-stone-900 tracking-tight">
                  4.7
                </span>
                <div className="space-y-1">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    165 Google Maps {lang === 'fi' ? 'arvostelua' : 'reviews'}
                  </div>
                </div>
              </div>

              {/* Price range indicator */}
              <div className="mt-6 pt-5 border-t border-stone-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">{t.reviews.priceReported}</span>
                  <span className="font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg">
                    €10–35 / hlö
                  </span>
                </div>
                <div className="text-[11px] text-stone-400">
                  {lang === 'fi' ? 'Perustuu opiskelijoiden ja vierailijoiden ilmoittamiin hintoihin.' : 'Based on visitor reports for food & beer pitchers.'}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenWriteReview}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-600/20 transition-all active:scale-95 cursor-pointer"
            >
              <PenLine className="w-4 h-4" />
              <span>{t.reviews.writeReviewBtn}</span>
            </button>
          </div>

          {/* Rating Distribution Bars */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-center space-y-3.5">
            <h3 className="font-display font-bold text-base text-stone-900 mb-1">
              {lang === 'fi' ? 'Arvosanojen jakautuma' : 'Rating Breakdown'}
            </h3>

            {[
              { stars: 5, pct: 86, count: 142 },
              { stars: 4, pct: 10, count: 16 },
              { stars: 3, pct: 2, count: 3 },
              { stars: 2, pct: 1, count: 2 },
              { stars: 1, pct: 1, count: 2 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs">
                <span className="w-4 font-bold text-stone-700 text-right">{item.stars}</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="w-12 text-stone-500 text-[11px] text-right font-medium">
                  {item.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tag Filters (from Google Maps) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'bg-white text-stone-700 border border-stone-200/90 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              <span>{tag.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedTag === tag.id ? 'bg-amber-700 text-white' : 'bg-stone-100 text-stone-500'
              }`}>
                {tag.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id];
            const currentLikes = (rev.likes || 0) + (isLiked ? 1 : 0);

            return (
              <div
                key={rev.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Author Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-white shadow-2xs ${
                          rev.avatarColor || 'bg-amber-600'
                        }`}
                      >
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-stone-900 text-sm">
                            {rev.author}
                          </h4>
                          {rev.isLocalGuide && (
                            <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                              Local Guide
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-stone-400">
                          {rev.reviewCount && `${rev.reviewCount} ${lang === 'fi' ? 'arvostelua' : 'reviews'}`}
                          {rev.photoCount ? ` · ${rev.photoCount} ${lang === 'fi' ? 'kuvaa' : 'photos'}` : ''}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-stone-400">
                      {rev.date[lang]}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    "{rev.text[lang]}"
                  </p>
                </div>

                {/* Footer tags & Helpful button */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {rev.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-semibold border border-stone-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleToggleLike(rev.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isLiked
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-amber-600 text-amber-600' : ''}`} />
                    <span>{t.reviews.helpful} ({currentLikes})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
