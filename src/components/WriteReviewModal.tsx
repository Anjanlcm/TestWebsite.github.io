import React, { useState } from 'react';
import { X, Star, CheckCircle2 } from 'lucide-react';
import { Language, ReviewItem } from '../types';
import { translations } from '../data/translations';

interface WriteReviewModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ReviewItem) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  lang,
  isOpen,
  onClose,
  onAddReview,
}) => {
  const t = translations[lang];
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [selectedTags, setSelectedTags] = useState<('pitchers' | 'students' | 'food' | 'owner' | 'drink')[]>(['students']);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleTag = (tag: 'pitchers' | 'students' | 'food' | 'owner' | 'drink') => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      author: name.trim(),
      rating,
      date: {
        fi: 'Juuri nyt',
        en: 'Just now',
      },
      text: {
        fi: comment.trim(),
        en: comment.trim(),
      },
      tags: selectedTags.length ? selectedTags : ['students'],
      likes: 1,
      avatarColor: 'bg-amber-600',
    };

    onAddReview(newRev);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setComment('');
      onClose();
    }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <h3 className="font-display font-bold text-xl text-stone-900">
              {t.reviewModal.title}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {t.reviewModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {success ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-display font-bold text-lg text-stone-900">
              {t.reviewModal.successMsg}
            </h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Rating Stars */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1.5">
                {t.reviewModal.ratingLabel}
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = (hoverRating ?? rating) >= star;
                  return (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-500 cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          active ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="text-sm font-bold text-stone-900 ml-2">{rating}/5</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">
                {t.reviewModal.nameLabel} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'fi' ? 'LUT Opiskelija' : 'LUT Student'}
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
            </div>

            {/* Tag Selection */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1.5">
                {t.reviewModal.tagsLabel}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(['pitchers', 'students', 'food', 'owner', 'drink'] as const).map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 border border-stone-200 hover:bg-stone-200/70 hover:text-stone-900'
                      }`}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Review Comment */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">
                {t.reviewModal.commentLabel} *
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={lang === 'fi' ? 'Kerro kokemuksestasi, ruoasta, kannuista tai henkilökunnasta...' : 'Share your thoughts on the gyros, cold pitchers, or atmosphere...'}
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-md shadow-amber-600/20 active:scale-95 cursor-pointer"
              >
                {t.reviewModal.submitBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
