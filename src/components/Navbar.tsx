import React, { useState } from 'react';
import { Phone, Calendar, Globe, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';
import { getBarStatus } from '../utils/statusHelper';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const status = getBarStatus();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/90 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center font-display font-extrabold text-2xl text-white shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  Cafe Bar G
                </span>
                <span className="hidden sm:inline-flex text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                  LUT University
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-block w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
                <span className="font-semibold text-emerald-700">
                  {lang === 'fi' ? status.textFi : status.textEn}
                </span>
                <span className="hidden md:inline text-stone-300">·</span>
                <span className="hidden md:inline text-stone-500 font-medium">
                  {lang === 'fi' ? status.detailFi : status.detailEn}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-600">
            <a href="#overview" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.overview}
            </a>
            <a href="#menu" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.menu}
            </a>
            <a href="#gallery" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.gallery}
            </a>
            <a href="#reviews" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.reviews}
            </a>
            <a href="#hours" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.hours}
            </a>
            <a href="#about" className="hover:text-amber-700 transition-colors py-1">
              {t.nav.about}
            </a>
          </nav>

          {/* Actions & Language Switch */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-700 text-xs font-bold border border-stone-200 transition-all cursor-pointer shadow-2xs"
              title={lang === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'fi' ? 'Suomi 🇫🇮' : 'English 🇬🇧'}</span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-500 text-[11px]">{lang === 'fi' ? 'EN' : 'FI'}</span>
            </button>

            {/* Quick Call */}
            <a
              id="nav-call-btn"
              href={`tel:${BAR_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold border border-stone-200/90 shadow-2xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden xl:inline">{BAR_CONTACT.phone}</span>
              <span className="xl:hidden">{t.nav.callNow}</span>
            </a>

            {/* Reserve Table Button */}
            <button
              id="nav-reserve-btn"
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-md shadow-amber-600/25 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.reserveTable}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 rounded-xl bg-stone-100 border border-stone-200 text-xs font-bold text-amber-700"
            >
              {lang === 'fi' ? 'EN 🇬🇧' : 'FI 🇫🇮'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'fi' ? status.detailFi : status.detailEn}</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Laserkatu 8 (LUT)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.overview}
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.menu}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#hours"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.hours}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900"
            >
              {t.nav.about}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-600/20"
            >
              <Calendar className="w-4 h-4" />
              {t.nav.reserveTable}
            </button>
            <a
              href={`tel:${BAR_CONTACT.phone.replace(/\s+/g, '')}`}
              className="w-full py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm flex items-center justify-center gap-2 border border-stone-200"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              {t.nav.callNow} ({BAR_CONTACT.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
