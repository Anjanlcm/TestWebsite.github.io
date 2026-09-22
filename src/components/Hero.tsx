import React from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Sparkles, 
  Beer, 
  UtensilsCrossed, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Users,
  Compass,
  Calendar
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';
import { getBarStatus } from '../utils/statusHelper';

interface HeroProps {
  lang: Language;
  onOpenReservation: () => void;
  onOpenMidnightModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenReservation, onOpenMidnightModal }) => {
  const t = translations[lang];
  const status = getBarStatus();

  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-[#faf8f5] to-stone-50 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-stone-200/70">
      {/* Decorative ambient gradients (warm honey & sage, no dark gloom) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Campus & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>LUT University Campus</span>
              </span>

              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-2xs ${
                  status.isOpen
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-700 border-stone-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'
                  }`}
                />
                <span>{lang === 'fi' ? status.textFi : status.textEn}</span>
                <span className="text-stone-400">·</span>
                <span>{lang === 'fi' ? status.detailFi : status.detailEn}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.08]">
                {t.hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">
                  {t.hero.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            {/* Google Maps Verified Meta Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Rating */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="font-display font-bold text-stone-900 text-base">4.7</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 flex items-center gap-1">
                      <span>165 Google Maps arvostelua</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {BAR_CONTACT.priceRange} {lang === 'fi' ? 'per henkilö' : 'per person'} · Bar & Ravintola
                    </span>
                  </div>
                </div>

                {/* Service Types */}
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    {t.hero.serviceDineIn}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    {t.hero.serviceTakeaway}
                  </span>
                </div>
              </div>

              {/* Address with Google Maps link */}
              <div className="flex flex-wrap items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-600 gap-2">
                <a 
                  href={BAR_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-stone-700 hover:text-amber-700 font-medium transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="underline decoration-stone-300 underline-offset-2 font-semibold">
                    {BAR_CONTACT.address}
                  </span>
                  <span className="text-stone-400">({BAR_CONTACT.locationDetails})</span>
                </a>
                <span className="text-[11px] text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                  {lang === 'fi' ? 'Skinnarila · LUT' : 'Campus Hub'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#menu"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-lg shadow-amber-600/25 active:scale-95 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{t.hero.viewMenuBtn}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onOpenReservation}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm transition-all border border-stone-300 shadow-sm active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{t.hero.reserveBtn}</span>
              </button>

              <button
                onClick={onOpenMidnightModal}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs transition-colors border border-amber-300/80 cursor-pointer"
              >
                <Beer className="w-4 h-4 text-amber-600" />
                <span>{lang === 'fi' ? 'Perjantain keskiyön seremonia klo 00:00' : 'Friday 12 AM Ceremony'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Feature Grid with Real Google Maps Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Primary Image: Bright Scandinavian Interior */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src="/src/assets/images/cafe_bar_g_bright_1790073735606.jpg"
                  alt="Cafe Bar G LUT University modern interior and bar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Cafe Bar G</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black shadow-md">
                    EST. 2004
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider font-bold text-amber-300">
                    Skinnarila · Lappeenranta
                  </div>
                  <div className="font-display font-bold text-lg sm:text-xl drop-shadow-sm">
                    {lang === 'fi'
                      ? 'Opiskelijoiden olohuone jo yli 20 vuotta'
                      : 'The Living Room of LUT Students for Over 20 Years'}
                  </div>
                </div>
              </div>

              {/* Bottom Thumbnail Strip with Authentic Real Photos */}
              <div className="p-3 bg-stone-50 border-t border-stone-200 grid grid-cols-3 gap-2">
                <div className="relative rounded-xl overflow-hidden aspect-video border border-stone-200 shadow-2xs group cursor-pointer">
                  <img
                    src="/src/assets/images/bar_g_gyros_1790072982580.jpg"
                    alt="Authentic Greek Gyros"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/30 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-white leading-tight drop-shadow-sm">
                      Kreikka Gyros
                    </span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-video border border-stone-200 shadow-2xs group cursor-pointer">
                  <img
                    src="/src/assets/images/bar_g_pitchers_1790072997811.jpg"
                    alt="Ice-Cold Pitchers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/30 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-white leading-tight drop-shadow-sm">
                      1.5L Kannut
                    </span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-video border border-stone-200 shadow-2xs group cursor-pointer">
                  <img
                    src="/src/assets/images/cafe_bar_g_patio_1790073757590.jpg"
                    alt="Campus Terrace"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/30 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-white leading-tight drop-shadow-sm">
                      LUT Terassi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Floating Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 max-w-xs bg-white rounded-2xl p-4 shadow-xl border border-stone-200/90 z-20">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  Z
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Zhang Borui</div>
                  <div className="text-[10px] text-stone-400">LUT University Student</div>
                </div>
                <div className="ml-auto flex text-amber-500">
                  {'★★★★★'}
                </div>
              </div>
              <p className="text-[11px] text-stone-600 italic line-clamp-2">
                "Especially on Friday night, it will be full of students and at 12am there will also have a ceremony..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
