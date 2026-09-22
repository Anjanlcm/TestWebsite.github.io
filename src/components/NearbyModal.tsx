import React from 'react';
import { X, MapPin, Compass, Building, GraduationCap, Waves, Home, ShoppingCart } from 'lucide-react';
import { Language } from '../types';

interface NearbyModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const NearbyModal: React.FC<NearbyModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const places = [
    {
      icon: Building,
      nameFi: 'LUT Ylioppilastalo (YO-talo / Aalef)',
      nameEn: 'LUT Student Union House (Ylioppilastalo)',
      dist: '30 m',
      descFi: 'Aivan Cafe Bar G:n vieressä! Opiskelijajärjestöjen ja kiltojen toimistot sekä tapahtumatilat.',
      descEn: 'Right beside Cafe Bar G! Guild offices, student club rooms, and event venues.',
    },
    {
      icon: GraduationCap,
      nameFi: 'LUT-yliopiston päärakennus & kirjasto',
      nameEn: 'LUT University Main Campus & Library',
      dist: '150 m',
      descFi: 'Luentosalit, laboratoriot ja opiskelutilat vain parin minuutin kävelymatkan päässä.',
      descEn: 'Lecture halls, laboratories, and 24/7 study areas within 2 minutes walk.',
    },
    {
      icon: Home,
      nameFi: 'LOAS Opiskelija-asunnot (Laserkatu & Korpikankare)',
      nameEn: 'LOAS Student Apartments (Laserkatu & Campus)',
      dist: '100–300 m',
      descFi: 'Tuhansien opiskelijoiden kodit kampuksella – helppo kävellä iltaa viettämään ja turvallisesti kotiin.',
      descEn: 'Campus student housing for thousands of students – quick safe walk home after pitchers.',
    },
    {
      icon: Waves,
      nameFi: 'Saimaan ranta & Skinnarilan rantaraitti',
      nameEn: 'Lake Saimaa Shoreline & Scenic Trail',
      dist: '450 m',
      descFi: 'Upea Saimaa ja saunalautat opiskelijoiden suosiman virkistysalueen äärellä.',
      descEn: 'Gorgeous Lake Saimaa views, piers, and summer student hangouts.',
    },
    {
      icon: ShoppingCart,
      nameFi: 'Sammonlahden palvelukeskus (S-Market & K-Supermarket)',
      nameEn: 'Sammonlahti Shopping Hub',
      dist: '1.2 km',
      descFi: 'Ruokakaupat, apteekki ja bussi-yhteydet keskustaan.',
      descEn: 'Grocery supermarkets, pharmacy, and bus connections to city center.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            <h3 className="font-display font-bold text-xl text-stone-900">
              {lang === 'fi' ? 'Lähistöllä Cafe Bar G:n ympärillä' : 'Nearby Cafe Bar G'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-stone-600">
          {lang === 'fi'
            ? 'Cafe Bar G sijaitsee Skinnarilassa, aivan LUT- ja LAB-korkeakoulukampuksen ytimessä.'
            : 'Cafe Bar G is located right in Skinnarila at the heart of the LUT & LAB university campus.'}
        </p>

        <div className="space-y-3">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3.5 hover:border-stone-300 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                <place.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-display font-bold text-sm text-stone-900 truncate">
                    {lang === 'fi' ? place.nameFi : place.nameEn}
                  </h4>
                  <span className="text-xs font-bold text-emerald-800 shrink-0 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {place.dist}
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                  {lang === 'fi' ? place.descFi : place.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-200 transition-colors cursor-pointer"
          >
            {lang === 'fi' ? 'Sulje' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
