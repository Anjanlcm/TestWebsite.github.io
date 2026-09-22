import React from 'react';
import { X, Sparkles, Beer, Heart, Music, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MidnightModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const MidnightModal: React.FC<MidnightModalProps> = ({ lang, isOpen, onClose }) => {
  const t = translations[lang];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-2xl space-y-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto border border-amber-300 shadow-md">
          <Clock className="w-8 h-8 animate-pulse text-amber-600" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>LUT University Tradition</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-stone-900">
            {t.traditionModal.title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            {t.traditionModal.desc}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <Beer className="w-4 h-4 text-amber-600" />
            <span>{lang === 'fi' ? 'Mistä perinteessä on kyse?' : 'What is the tradition?'}</span>
          </div>
          <p className="text-xs text-stone-700 italic leading-relaxed">
            "Especially on Friday night, it will be full of students from LUT University and at 12am there will also have a ceremony at here. I will never forget this place."
          </p>
          <div className="text-[11px] text-stone-500 text-right font-medium">
            – Zhang Borui, LUT Student
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
            <Clock className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <span className="font-bold text-stone-900 block">00:00</span>
            <span className="text-[10px] text-stone-500">Joka perjantai</span>
          </div>
          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
            <Music className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <span className="font-bold text-stone-900 block">Laulu & Malja</span>
            <span className="text-[10px] text-stone-500">Teekkarit & kylterit</span>
          </div>
          <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
            <Heart className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <span className="font-bold text-stone-900 block">Yhteisö</span>
            <span className="text-[10px] text-stone-500">Skinnarila spirit</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-colors cursor-pointer shadow-md shadow-amber-600/20"
        >
          {t.traditionModal.close}
        </button>
      </div>
    </div>
  );
};
