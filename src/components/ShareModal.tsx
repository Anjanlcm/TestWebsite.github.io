import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Send, Navigation, QrCode } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BAR_CONTACT } from '../data/barData';

interface ShareModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ lang, isOpen, onClose }) => {
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareText =
    lang === 'fi'
      ? `Lähdetään Cafe Bar G:hen kannuille ja gyrokselle! Laserkatu 8, LUT: ${currentUrl}`
      : `Let's head to Cafe Bar G for pitchers & gyros! Laserkatu 8, LUT: ${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full bg-white rounded-3xl p-6 border border-stone-200 shadow-2xl space-y-5 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <h3 className="font-display font-bold text-lg text-stone-900">
            {t.shareModal.title}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {t.shareModal.subtitle}
          </p>
        </div>

        {/* QR Code Card */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 inline-block mx-auto">
          <div className="w-36 h-36 bg-white p-2 rounded-xl mx-auto flex items-center justify-center border border-stone-200 shadow-2xs">
            {/* SVG QR Code pattern */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-stone-900 fill-current">
              <rect width="100" height="100" fill="white" />
              {/* Corner squares */}
              <rect x="10" y="10" width="25" height="25" fill="#1c1917" />
              <rect x="15" y="15" width="15" height="15" fill="white" />
              <rect x="18" y="18" width="9" height="9" fill="#d97706" />

              <rect x="65" y="10" width="25" height="25" fill="#1c1917" />
              <rect x="70" y="15" width="15" height="15" fill="white" />
              <rect x="73" y="18" width="9" height="9" fill="#d97706" />

              <rect x="10" y="65" width="25" height="25" fill="#1c1917" />
              <rect x="15" y="70" width="15" height="15" fill="white" />
              <rect x="18" y="73" width="9" height="9" fill="#d97706" />

              {/* Data dots */}
              <rect x="42" y="12" width="6" height="6" fill="#1c1917" />
              <rect x="52" y="12" width="6" height="6" fill="#1c1917" />
              <rect x="42" y="24" width="6" height="12" fill="#1c1917" />
              <rect x="52" y="30" width="6" height="6" fill="#1c1917" />
              <rect x="12" y="42" width="12" height="6" fill="#1c1917" />
              <rect x="28" y="42" width="12" height="6" fill="#1c1917" />
              <rect x="45" y="45" width="10" height="10" fill="#d97706" />
              <rect x="65" y="45" width="6" height="12" fill="#1c1917" />
              <rect x="80" y="45" width="8" height="6" fill="#1c1917" />
              <rect x="42" y="65" width="8" height="8" fill="#1c1917" />
              <rect x="60" y="65" width="14" height="6" fill="#1c1917" />
              <rect x="52" y="78" width="8" height="10" fill="#1c1917" />
              <rect x="75" y="75" width="12" height="12" fill="#1c1917" />
            </svg>
          </div>
          <span className="text-[10px] text-stone-500 font-mono mt-2 block">
            Scan to open on mobile
          </span>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 bg-stone-50 p-1.5 rounded-xl border border-stone-200">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent px-2 text-xs text-stone-800 focus:outline-none truncate"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-colors cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'fi' ? 'Kopioitu!' : 'Copied!') : t.shareModal.copyUrl}</span>
          </button>
        </div>

        {/* Social Share buttons */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={shareWhatsApp}
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={shareTelegram}
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-semibold transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4 text-sky-600" />
            <span>Telegram</span>
          </button>
        </div>

        <a
          href={BAR_CONTACT.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-200 transition-colors"
        >
          <Navigation className="w-4 h-4 text-sky-600" />
          <span>{t.shareModal.openMaps}</span>
        </a>
      </div>
    </div>
  );
};
