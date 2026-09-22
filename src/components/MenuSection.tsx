import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Beer, 
  Flame, 
  Sparkles, 
  Users, 
  Calculator, 
  Check, 
  Heart,
  ChevronRight,
  Info
} from 'lucide-react';
import { Language, MenuCategory } from '../types';
import { translations } from '../data/translations';
import { MENU_ITEMS } from '../data/barData';

interface MenuSectionProps {
  lang: Language;
  onSelectForReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang, onSelectForReservation }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  
  // Pitcher splitter tool state
  const [numPeople, setNumPeople] = useState<number>(4);
  const [pitcherCount, setPitcherCount] = useState<number>(2);
  const pitcherPrice = 18.0; // standard student-friendly 1.5L pitcher price

  const totalCost = pitcherCount * pitcherPrice;
  const costPerPerson = totalCost / (numPeople || 1);
  const litersTotal = pitcherCount * 1.5;
  const dlPerPerson = ((litersTotal * 10) / (numPeople || 1)).toFixed(1);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: t.menu.categoryAll },
    { id: 'greek', label: t.menu.categoryGreek },
    { id: 'burgers', label: t.menu.categoryBurgers },
    { id: 'fries', label: t.menu.categoryFries },
    { id: 'pasta', label: t.menu.categoryPasta },
    { id: 'pitchers', label: t.menu.categoryPitchers },
    { id: 'drinks', label: t.menu.categoryDrinks },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#faf8f5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.menu.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
            {t.menu.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Pitcher Calculator & Student Feature Card (Modern, luminous styling) */}
        <div className="mb-14 rounded-3xl bg-white border border-amber-200/90 p-6 sm:p-8 shadow-lg shadow-amber-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.menu.calculatorTitle}</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-stone-900">
                {lang === 'fi' ? 'Legendaariset 1,5L Kannut' : 'Legendary 1.5L Draught Pitchers'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.menu.calculatorSubtitle}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 inline-flex">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'fi' ? 'Opiskelijaystävällinen hinta · Karhu, Sandels & Lonkero' : 'Student-friendly price · Draught Beer & Lonkero'}</span>
              </div>
            </div>

            {/* Interactive Calculator Inputs & Live Output */}
            <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Persons slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-800 mb-1.5">
                    <span>{t.menu.calcPersons}:</span>
                    <span className="text-amber-700">{numPeople} {lang === 'fi' ? 'hlö' : 'pers.'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={numPeople}
                    onChange={(e) => setNumPeople(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
                    <span>1</span>
                    <span>4</span>
                    <span>8</span>
                    <span>12</span>
                  </div>
                </div>

                {/* Pitcher count slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-800 mb-1.5">
                    <span>{t.menu.calcPitchers}:</span>
                    <span className="text-amber-700">{pitcherCount} {lang === 'fi' ? 'kannua (1.5L)' : 'pitchers (1.5L)'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={pitcherCount}
                    onChange={(e) => setPitcherCount(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
                    <span>1 (1.5L)</span>
                    <span>4 (6.0L)</span>
                    <span>8 (12L)</span>
                  </div>
                </div>
              </div>

              {/* Cost Split Output Box */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">
                    {t.menu.calcCostPerPerson}
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-700">
                    €{costPerPerson.toFixed(2)}
                    <span className="text-xs font-semibold text-stone-500 ml-1">/ {lang === 'fi' ? 'hlö' : 'person'}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">
                    {t.menu.calcTotalCost}
                  </div>
                  <div className="text-lg font-bold text-stone-900">
                    €{totalCost.toFixed(2)}
                    <span className="text-xs text-stone-500 font-normal ml-1">
                      ({litersTotal} L · ~{dlPerPerson} dl/{lang === 'fi' ? 'hlö' : 'p'})
                    </span>
                  </div>
                </div>

                <button
                  onClick={onSelectForReservation}
                  className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-600/20 transition-all cursor-pointer"
                >
                  {lang === 'fi' ? 'Varaa pöytä & kannut' : 'Reserve Table & Pitchers'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'bg-white text-stone-700 border border-stone-200/90 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* Optional Photo Header for Key Highlights */}
              {item.imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl font-display font-extrabold text-stone-900 text-sm shadow-sm border border-stone-200">
                    €{item.price.toFixed(2)}
                  </div>
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-amber-600 text-white px-2.5 py-1 rounded-xl text-[11px] font-bold shadow-sm">
                      {item.badge[lang]}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                      {item.name[lang]}
                    </h3>
                    {!item.imageUrl && (
                      <span className="font-display font-extrabold text-amber-700 text-base shrink-0 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                        €{item.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-semibold border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onSelectForReservation}
                    className="text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>{lang === 'fi' ? 'Tilaa' : 'Order'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary / Kitchen Note */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-3 text-xs text-amber-900 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            {lang === 'fi'
              ? 'Kysy henkilökunnalta lisätietoja allergeeneista ja gluteenittomista vaihtoehdoista. Keittiö auki joka ilta klo 01.00 asti.'
              : 'Please ask our staff for allergen information and gluten-free choices. Kitchen open every night until 1:00 AM.'}
          </span>
        </div>
      </div>
    </section>
  );
};
