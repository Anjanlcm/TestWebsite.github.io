import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Beer, CheckCircle2 } from 'lucide-react';
import { Language, ReservationFormData } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';

interface ReservationModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ lang, isOpen, onClose }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 4,
    guildOrOccasion: '',
    preorderPitchers: 1,
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <h3 className="font-display font-bold text-xl text-stone-900">
              {t.reservationModal.title}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {t.reservationModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-xl text-stone-900">
              {t.reservationModal.successTitle}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              {t.reservationModal.successMsg}
            </p>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 text-left space-y-1">
              <div><strong>{lang === 'fi' ? 'Varaaja:' : 'Name:'}</strong> {formData.name}</div>
              <div><strong>{lang === 'fi' ? 'Päivä & Aika:' : 'Date & Time:'}</strong> {formData.date} klo {formData.time}</div>
              <div><strong>{lang === 'fi' ? 'Henkilömäärä:' : 'Guests:'}</strong> {formData.guests} {lang === 'fi' ? 'hlö' : 'pers.'}</div>
              {formData.preorderPitchers ? (
                <div><strong>{lang === 'fi' ? 'Ennakkokannut:' : 'Pitchers:'}</strong> {formData.preorderPitchers} kpl (1.5L)</div>
              ) : null}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {t.reservationModal.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'fi' ? 'Matti Meikäläinen' : 'John Doe'}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="040 123 4567"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">
                {t.reservationModal.emailLabel} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="opiskelija@lut.fi"
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.dateLabel}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.timeLabel}
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-2 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:border-amber-600 focus:outline-none"
                >
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.guestsLabel}
                </label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:border-amber-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  {t.reservationModal.guildLabel}
                </label>
                <input
                  type="text"
                  value={formData.guildOrOccasion}
                  onChange={(e) => setFormData({ ...formData, guildOrOccasion: e.target.value })}
                  placeholder={lang === 'fi' ? 'Esim. Pelletti, Cluster, Synttärit' : 'e.g. Guild, Birthday, Exchange students'}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1 flex items-center gap-1.5">
                  <Beer className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.reservationModal.pitcherPreorderLabel}</span>
                </label>
                <select
                  value={formData.preorderPitchers}
                  onChange={(e) => setFormData({ ...formData, preorderPitchers: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:border-amber-600 focus:outline-none"
                >
                  <option value="0">{lang === 'fi' ? 'Ei ennakkokannuja' : 'No pre-ordered pitchers'}</option>
                  <option value="1">1x Hanakannu (1.5L)</option>
                  <option value="2">2x Hanakannua (3.0L)</option>
                  <option value="3">3x Hanakannua (4.5L)</option>
                  <option value="4">4x Hanakannua (6.0L)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">
                {t.reservationModal.notesLabel}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={lang === 'fi' ? 'Erityistoiveet pöydän sijainnille, gyros-tilaukset jne.' : 'Any special seating or food requests...'}
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-md shadow-amber-600/20 active:scale-95 cursor-pointer"
              >
                {t.reservationModal.submitBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
