import React from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Navigation, 
  Instagram, 
  CheckCircle2, 
  Car, 
  Tv, 
  Users, 
  Wine, 
  ShieldCheck, 
  Utensils, 
  Building2,
  CalendarCheck,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';
import { getBarStatus } from '../utils/statusHelper';

interface AboutAndHoursProps {
  lang: Language;
  onOpenReservation: () => void;
}

export const AboutAndHoursSection: React.FC<AboutAndHoursProps> = ({ lang, onOpenReservation }) => {
  const t = translations[lang];
  const status = getBarStatus();

  // Current day index in JS: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  const currentDayIndex = new Date().getDay();

  return (
    <section id="hours" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.hours.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
            {lang === 'fi' ? 'Aukioloajat & Skinnarilan Sijainti' : 'Opening Hours & LUT Campus Location'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            {t.hours.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Weekly Hours Card & Amenities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-display font-bold text-lg text-stone-900">
                    {lang === 'fi' ? 'Viikon Aukioloajat' : 'Weekly Opening Hours'}
                  </h3>
                </div>
                <div
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    status.isOpen
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-amber-900 border-amber-300'
                  }`}
                >
                  {lang === 'fi' ? status.textFi : status.textEn}
                </div>
              </div>

              {/* Hours List */}
              <div className="divide-y divide-stone-200/70 mt-4">
                {BAR_CONTACT.openingHours.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.dayIndex}
                      className={`flex items-center justify-between py-3 px-3 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-amber-100/70 border border-amber-300 font-bold text-amber-950'
                          : 'text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm">
                          {lang === 'fi' ? item.nameFi : item.nameEn}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-amber-600 text-white font-extrabold shadow-2xs">
                            {lang === 'fi' ? 'Tänään' : 'Today'}
                          </span>
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm ${item.isOpen ? 'text-stone-900 font-semibold' : 'text-stone-400'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick note */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>{lang === 'fi' ? 'Keittiö auki klo 01.00 asti' : 'Kitchen open until 1:00 AM'}</span>
                <button
                  onClick={onOpenReservation}
                  className="text-amber-700 hover:text-amber-800 font-bold underline cursor-pointer"
                >
                  {lang === 'fi' ? 'Tee pöytävaraus' : 'Make a table reservation'}
                </button>
              </div>
            </div>

            {/* Google Maps Amenities & Attributes Checklist */}
            <div id="about" className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>{t.about.keyFeaturesTitle}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { icon: Utensils, label: lang === 'fi' ? 'Ruokailu & Takeaway' : 'Dine-in & Takeaway' },
                  { icon: Car, label: lang === 'fi' ? 'Esteetön pysäköinti' : 'Accessible Car Park' },
                  { icon: ShieldCheck, label: lang === 'fi' ? 'Esteetön sisäänkäynti' : 'Accessible Entrance' },
                  { icon: Tv, label: lang === 'fi' ? 'Urheilu screenillä' : 'Sports Broadcasts' },
                  { icon: Users, label: lang === 'fi' ? 'Ryhmät & Killat' : 'Groups & Guilds' },
                  { icon: Wine, label: lang === 'fi' ? 'Olut, viini & cocktailit' : 'Beer, Wine & Cocktails' },
                  { icon: Building2, label: lang === 'fi' ? 'Sijainti LUT Kampus' : 'Located at LUT' },
                  { icon: CalendarCheck, label: lang === 'fi' ? 'Pöytävaraukset' : 'Accepts Reservations' },
                ].map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col items-start gap-1.5 text-stone-800"
                  >
                    <amenity.icon className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-[11px]">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Story & Location Map Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-stone-900">
                {t.about.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t.about.story1}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t.about.story2}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t.about.story3}
              </p>
            </div>

            {/* Location & Directions Map Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>{BAR_CONTACT.address}</span>
                </div>
                <span className="text-xs text-amber-800 font-bold bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300">
                  LUT 53850
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600">
                {BAR_CONTACT.locationDetails}
              </p>

              {/* Transit hints */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
                <div className="font-bold text-stone-900">
                  {lang === 'fi' ? 'Miten saapua paikan päälle?' : 'How to get here?'}
                </div>
                <div className="text-stone-600 space-y-1">
                  <div>
                    🚌 <strong className="text-stone-900">Bussi:</strong> Lappeenrannan Jouko-linjat 1 ja 5 tuovat suoraan LUT-yliopiston pääoville.
                  </div>
                  <div>
                    🚶 <strong className="text-stone-900">Kävellen:</strong> Ylioppilastalon (Aalef / YO-talo) takapihalta suoraan Laserkadun sisäänkäynnille.
                  </div>
                  <div>
                    🚗 <strong className="text-stone-900">Autolla:</strong> Maksuton iltapysäköinti kampuksen Laserkadun parkkipaikoilla klo 16 jälkeen.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={BAR_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-600/20 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.quickActions.directions}</span>
                </a>

                <a
                  href={`tel:${BAR_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm border border-stone-300 transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{BAR_CONTACT.phone}</span>
                </a>

                <a
                  href={BAR_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-white hover:bg-stone-50 text-pink-600 border border-stone-300 transition-colors shadow-2xs"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
