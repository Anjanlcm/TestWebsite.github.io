import React from 'react';
import { Star, MapPin, Phone, Mail, Instagram, Navigation, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang, onOpenReservation }) => {
  const t = translations[lang];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center font-display font-extrabold text-2xl text-white shadow-md shadow-amber-500/25">
                G
              </div>
              <span className="font-display font-bold text-xl text-white">Cafe Bar G</span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {lang === 'fi'
                ? 'Skinnarilan ja LUT-yliopiston opiskelijaelämän legendaarinen olohuone vuodesta 2004. Aitoa kreikkalaista ruokaa, raikkaita kannuja ja lämmintä vieraanvaraisuutta.'
                : 'The legendary living room of LUT University student life in Skinnarila since 2004. Authentic Greek food, cold pitchers, and warm hospitality.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.7 / 5.0</span>
              <span className="text-stone-600">·</span>
              <span>165 Google Maps reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'fi' ? 'Navigointi' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors">
                  {t.nav.overview}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  {t.menu.title}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {t.gallery.title}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  {t.reviews.title}
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-amber-400 transition-colors">
                  {t.hours.title}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  {t.nav.reserveTable}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {t.hours.title}
            </h4>
            <div className="text-xs text-stone-400 space-y-1.5">
              <div className="flex justify-between">
                <span>{lang === 'fi' ? 'Ti–La' : 'Tue–Sat'}</span>
                <span className="text-white font-medium">18:00 – 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'fi' ? 'Su & Ma' : 'Sun & Mon'}</span>
                <span className="text-stone-500">{lang === 'fi' ? 'Suljettu' : 'Closed'}</span>
              </div>
              <div className="pt-2 text-[11px] text-amber-400">
                {lang === 'fi'
                  ? 'Perjantain keskiyön seremonia klo 00:00'
                  : 'Friday Midnight Ceremony at 12:00 AM'}
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'fi' ? 'Yhteystiedot' : 'Contact'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BAR_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BAR_CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BAR_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BAR_CONTACT.email}`} className="hover:text-white transition-colors">
                  {BAR_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={BAR_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 text-pink-400 flex items-center justify-center border border-stone-700 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BAR_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 text-sky-400 flex items-center justify-center border border-stone-700 transition-colors"
                title="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <button
                onClick={onToggleLang}
                className="px-2.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold border border-stone-700 cursor-pointer"
              >
                {lang === 'fi' ? 'In English 🇬🇧' : 'Suomeksi 🇫🇮'}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Cafe Bar G (Ay). Laserkatu 8, 53850 Lappeenranta, Finland.
          </div>
          <div className="flex items-center gap-1">
            <span>Made for LUT University students & friends with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>in Skinnarila</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
