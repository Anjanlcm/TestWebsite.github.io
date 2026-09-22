import { MenuItem, ReviewItem, GalleryPhoto } from '../types';

export const BAR_CONTACT = {
  name: 'Cafe Bar G',
  address: 'Laserkatu 8, 53850 Lappeenranta, Finland',
  locationDetails: 'LUT University Campus (Behind Student Union House / Ylioppilastalo)',
  phone: '040 722 5703',
  phoneFormatted: '+358 40 722 5703',
  email: 'cafebarg@co.inet.fi',
  googleMapsUrl: 'https://maps.app.goo.gl/yWyNQyUNjpWatzvS7',
  instagramUrl: 'https://instagram.com',
  rating: 4.7,
  totalReviews: 165,
  priceRange: '€10–35',
  establishedYear: 2004,
  openingHours: [
    { dayIndex: 1, nameFi: 'Maanantai', nameEn: 'Monday', isOpen: false, hours: 'Suljettu / Closed' },
    { dayIndex: 2, nameFi: 'Tiistai', nameEn: 'Tuesday', isOpen: true, hours: '18.00 – 02.00' },
    { dayIndex: 3, nameFi: 'Keskiviikko', nameEn: 'Wednesday', isOpen: true, hours: '18.00 – 02.00' },
    { dayIndex: 4, nameFi: 'Torstai', nameEn: 'Thursday', isOpen: true, hours: '18.00 – 02.00' },
    { dayIndex: 5, nameFi: 'Perjantai', nameEn: 'Friday', isOpen: true, hours: '18.00 – 02.00' },
    { dayIndex: 6, nameFi: 'Lauantai', nameEn: 'Saturday', isOpen: true, hours: '18.00 – 02.00' },
    { dayIndex: 0, nameFi: 'Sunnuntai', nameEn: 'Sunday', isOpen: false, hours: 'Suljettu / Closed' },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // Greek Delicacies
  {
    id: 'greek-gyros-platter',
    category: 'greek',
    name: {
      fi: 'Kreikkalainen Gyros Lautanen (Kuningas Gyros)',
      en: 'Authentic Greek Gyros Platter (King Gyros)',
    },
    description: {
      fi: 'Mehevää maustettua gyros-lihaa, rapeita kultaisia ranskalaisia, lämmin grillattu pitaleipä, aito talon tzatziki, tomaattia ja punasipulia.',
      en: 'Tender seasoned gyros meat, crisp golden fries, warm grilled pita bread, house-made tzatziki, fresh tomatoes, and red onions.',
    },
    price: 15.5,
    popular: true,
    studentFavorite: true,
    tags: ['L'],
    highlightNote: {
      fi: 'Asiakkaiden hehkuttama kreikkalainen erikoisuus',
      en: 'Guest favorite Greek authentic recipe',
    },
  },
  {
    id: 'greek-pita-chicken',
    category: 'greek',
    name: {
      fi: 'Kana Gyros Pita Wrap',
      en: 'Chicken Gyros Pita Wrap',
    },
    description: {
      fi: 'Grillattua kanagyrosta käärittynä aitoon kreikkalaiseen pitalättyyn, raikasta tzatzikia, salaattia, tomaattia ja ranskalaisia sisällä.',
      en: 'Grilled chicken gyros wrapped in warm pita, house tzatziki, crisp greens, ripe tomato, and French fries inside.',
    },
    price: 12.9,
    studentFavorite: true,
    tags: ['L'],
  },
  {
    id: 'greek-horiatiki-salad',
    category: 'greek',
    name: {
      fi: 'Aito Kreikkalainen Salaatti (Horiatiki)',
      en: 'Traditional Greek Salad (Horiatiki)',
    },
    description: {
      fi: 'Aitoa kreikkalaista fetaa, Kalamata-oliiveja, makeaa tomaattia, kurkkua, punasipulia, oreganoa ja neitsytoliiviöljyä pitaleivän kera.',
      en: 'Authentic Greek feta, Kalamata olives, ripe tomatoes, crisp cucumber, red onion, oregano, and extra virgin olive oil served with warm pita.',
    },
    price: 11.5,
    tags: ['G', 'Veg'],
  },
  {
    id: 'greek-souvlaki-plate',
    category: 'greek',
    name: {
      fi: 'Souvlaki Varraspaletti',
      en: 'Grilled Souvlaki Skewers Plate',
    },
    description: {
      fi: 'Kaksi mehukasta grillattua lihavarrasta, sitruuna-yrttimarinaadi, ranskalaiset, tzatziki ja grillattu pitaleipä.',
      en: 'Two succulent grilled marinated skewers, lemon herb infusion, seasoned fries, tzatziki, and warm pita wedges.',
    },
    price: 16.0,
    tags: ['L'],
  },

  // Burgers & Pasta
  {
    id: 'g-special-burger',
    category: 'burgers_pasta',
    name: {
      fi: 'Cafe Bar G Burger & Ranskalaiset',
      en: 'Cafe Bar G Bacon Burger & Fries',
    },
    description: {
      fi: '160g mehukas naudanlihapihvi, rapeaa pekonia, sulatettua cheddaria, maustekurkkua, talon burgerkastiketta briossisämpylällä ja kultaiset ranskalaiset.',
      en: '160g juicy beef patty, crispy bacon, melted cheddar, pickles, signature G burger sauce in a toasted brioche bun, served with fries.',
    },
    price: 14.9,
    popular: true,
    studentFavorite: true,
    tags: ['L'],
  },
  {
    id: 'smash-cheese-burger',
    category: 'burgers_pasta',
    name: {
      fi: 'Double Smash Cheese Burger',
      en: 'Double Smash Cheese Burger',
    },
    description: {
      fi: 'Kaksi rapeaksi paistettua smash-pihviä, tuplacheddar, karamellisoitua sipulia ja chipotle-majoneesia ranskalaisten kera.',
      en: 'Two crispy edged smash patties, double cheddar cheese, caramelized onions, and smoky chipotle mayo with fries.',
    },
    price: 15.5,
    tags: ['L'],
  },
  {
    id: 'creamy-chicken-pasta',
    category: 'burgers_pasta',
    name: {
      fi: 'Kermainen Valkosipuli-Kanapasta',
      en: 'Creamy Garlic Chicken Pasta',
    },
    description: {
      fi: 'Penne-pastaa, paistettua kananrintaa, valkosipulilla ja yrteillä maustettua täyteläistä kermakastiketta ja parmesaania.',
      en: 'Penne pasta with sauteed chicken breast in a rich garlic herb cream sauce topped with freshly grated parmesan.',
    },
    price: 13.9,
    tags: ['L'],
  },
  {
    id: 'pasta-arrabbiata',
    category: 'burgers_pasta',
    name: {
      fi: 'Penne Arrabbiata (Spicy)',
      en: 'Spicy Penne Arrabbiata',
    },
    description: {
      fi: 'Italialainen chilillä ja valkosipulilla maustettu tulinen tomaattikastike, tuoretta basilikaa ja parmesaanijuustoa.',
      en: 'Italian fiery chili and garlic plum tomato sauce, fresh basil ribbons, and aged shaved parmesan cheese.',
    },
    price: 12.0,
    tags: ['Veg'],
  },

  // Fries & Snacks
  {
    id: 'french-fries-basket',
    category: 'fries_snacks',
    name: {
      fi: 'Klassinen Ranskalaiskori (French Fries Basket)',
      en: 'Classic French Fries Basket',
    },
    description: {
      fi: 'Iso kori rapeita maustettuja ranskalaisia perunoita, tarjoillaan valitsemasi dipin kera (valkosipulimajoneesi, chilikastike tai tzatziki).',
      en: 'Generous sharing basket of crispy seasoned fries served with choice of house dips (garlic mayo, chili, or tzatziki).',
    },
    price: 6.5,
    popular: true,
    studentFavorite: true,
    tags: ['L', 'G', 'V'],
  },
  {
    id: 'loaded-cheddar-bacon-fries',
    category: 'fries_snacks',
    name: {
      fi: 'Loaded Cheddar & Pekoniranskalaiset',
      en: 'Loaded Cheddar & Bacon Fries',
    },
    description: {
      fi: 'Kultaiset ranskalaiset peitettynä lämpimällä cheddarkastikkeella, rapealla pekonimurulla, kevätsipulilla ja jalopenoilla.',
      en: 'Hot fries smothered in molten cheddar sauce, crispy bacon bits, scallions, and sliced jalapeno peppers.',
    },
    price: 9.5,
    popular: true,
    tags: ['G'],
  },
  {
    id: 'greek-feta-oregano-fries',
    category: 'fries_snacks',
    name: {
      fi: 'Kreikkalaiset Feta & Oregano Ranskalaiset',
      en: 'Greek Feta & Oregano Fries',
    },
    description: {
      fi: 'Rapeat ranskalaiset ripoteltuna aidolla murenetulla fetajuustolla, kreikkalaisella luomu-oreganolla ja sitruunaisella majoneesilla.',
      en: 'Crispy fries dusted with genuine crumbly Greek feta, wild organic oregano, and lemon herb drizzle.',
    },
    price: 8.5,
    tags: ['G', 'Veg'],
  },
  {
    id: 'snack-combo-basket',
    category: 'fries_snacks',
    name: {
      fi: 'Bar G Snack Kori (Sipulirenkaat & Mozzarella)',
      en: 'Bar G Finger Food Combo Basket',
    },
    description: {
      fi: 'Ranskalaisia, oluttaikinoituja sipulirenkaita, rapeita mozzarellatikkuja ja kaksi dippiä.',
      en: 'Crispy fries, beer-battered onion rings, golden mozzarella sticks, and two signature dips.',
    },
    price: 11.5,
    tags: ['Veg'],
  },

  // Pitchers & Drinks (Kannut & Juomat)
  {
    id: 'pitcher-beer-15',
    category: 'pitchers_drinks',
    name: {
      fi: 'Legendaarinen Olutkannu (1.5L Pitcher)',
      en: 'Legendary Beer Pitcher (1.5L Pitcher)',
    },
    description: {
      fi: 'Skinnarilan kuuluisin juoma! Jääkylmä 1,5 litran hanakannu raikasta suomalaista lageria ystävien kanssa jaettavaksi.',
      en: 'The Skinnarila campus classic! An ice-cold 1.5-liter pitcher of crisp draught lager poured with thick foam for your table.',
    },
    price: 19.5,
    popular: true,
    studentFavorite: true,
    tags: ['18+'],
    highlightNote: {
      fi: '"Kannuja menee enemmän kuin tili sallisi!" – Aleksi H.',
      en: '"Good jugs and best student prices"',
    },
  },
  {
    id: 'pitcher-lonkero-15',
    category: 'pitchers_drinks',
    name: {
      fi: 'Aito Lonkerokannu (Original Long Drink 1.5L)',
      en: 'Original Gin Long Drink Pitcher (1.5L)',
    },
    description: {
      fi: 'Raikas greippilonkero suoraan hanasta isossa 1,5 litran kannussa jäillä.',
      en: 'Refreshing Finnish grapefuit gin long drink served tap-fresh in a giant 1.5-liter pitcher with ice.',
    },
    price: 22.0,
    studentFavorite: true,
    tags: ['18+'],
  },
  {
    id: 'pitcher-cider-15',
    category: 'pitchers_drinks',
    name: {
      fi: 'Omenasiiderikannu (Cider Pitcher 1.5L)',
      en: 'Apple Cider Pitcher (1.5L)',
    },
    description: {
      fi: 'Kylmä ja raikas omenasiideri kannussa jaettavaksi.',
      en: 'Chilled refreshing draught apple cider pitcher.',
    },
    price: 21.0,
    tags: ['18+'],
  },
  {
    id: 'draught-beer-pint',
    category: 'pitchers_drinks',
    name: {
      fi: 'Hanaolut Tuoppi (0.5L)',
      en: 'Draught Beer Pint (0.5L)',
    },
    description: {
      fi: 'Kylmä hanatuoppi Karhua tai Auraa.',
      en: 'Cold draught pint of fresh lager.',
    },
    price: 6.5,
    tags: ['18+'],
  },
  {
    id: 'cocktail-g-sunset',
    category: 'pitchers_drinks',
    name: {
      fi: 'G-Special Cocktail / Talon Drinkki',
      en: 'G-Special Cocktail / House Drink',
    },
    description: {
      fi: 'Talon raikas gin- ja sitruscocktail marjaisalla twistillä.',
      en: 'Refreshing signature gin & citrus blend with a wild berry twist.',
    },
    price: 9.0,
    tags: ['18+'],
  },
  {
    id: 'soft-drinks-coffee',
    category: 'pitchers_drinks',
    name: {
      fi: 'Kahvi / Virvoitusjuoma (0.5L)',
      en: 'Coffee / Soft Drink (0.5L)',
    },
    description: {
      fi: 'Coca-Cola, Fanta, Sprite tai tuore suodatinkahvi.',
      en: 'Coca-Cola, Fanta, Sprite, or freshly brewed hot coffee.',
    },
    price: 3.5,
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-zhang',
    author: 'Zhang Borui',
    reviewCount: 1,
    rating: 5,
    date: {
      fi: '10 kuukautta sitten',
      en: '10 months ago',
    },
    text: {
      fi: 'Erittäin mukava baari, todella lähellä LUT-yliopistoa Lappeenrannassa jossa opiskelen. Loistava paikka kommunikoida ja tutustua uusiin ystäviin. Erityisesti perjantai-iltana tupa on täynnä LUT-opiskelijoita, ja klo 00:00 täällä on perinteinen seremonia. En tule koskaan unohtamaan tätä paikkaa.',
      en: "Very nice bar, it's really close to the LUT University in Lappeenranta where I study and it's also a nice place to communicate with others and meet new friends. Especially on Friday night, it will be full of students from LUT University and at 12am there will also have a ceremony at here. I will never forget this place.",
    },
    tags: ['students', 'pitchers'],
    likes: 8,
    avatarColor: 'bg-emerald-600',
  },
  {
    id: 'rev-aleksi',
    author: 'Aleksi Heikkilä',
    reviewCount: 2,
    rating: 5,
    date: {
      fi: '5 vuotta sitten',
      en: '5 years ago',
    },
    text: {
      fi: 'Klubi on huippuluokkaa, palvelu ensiluokkaista ja vetäjä on Äijä isolla kädellä. Kannuja menee enemmän kuin tili sallisi, mutta se ei haittaa yhtään. 5/5',
      en: 'The club is top class, the service is top notch and the manager is Äijä in a big way. There are more pitchers than the account allows, but it doesn\'t bother me at all. 5/5',
    },
    tags: ['pitchers', 'owner'],
    likes: 6,
    avatarColor: 'bg-amber-600',
  },
  {
    id: 'rev-ryan',
    author: 'Ryan Coombes',
    isLocalGuide: true,
    reviewCount: 126,
    photoCount: 1256,
    rating: 5,
    date: {
      fi: '2 vuotta sitten',
      en: '2 years ago',
    },
    text: {
      fi: 'Paras paikka ikinä, jos opiskelet LUTissa niin on melkeinpä synti olla käymättä täällä kavereiden kanssa!',
      en: "Best place ever, if you study at LUT I think it's a sin not to go here with your mates",
    },
    tags: ['students', 'drink'],
    likes: 3,
    avatarColor: 'bg-blue-600',
  },
  {
    id: 'rev-ilmari',
    author: 'Ilmari Vahteristo',
    isLocalGuide: true,
    reviewCount: 176,
    photoCount: 54,
    rating: 5,
    date: {
      fi: 'Muokattu 3 vuotta sitten',
      en: 'Edited 3 years ago',
    },
    text: {
      fi: 'Ei pahaa sanaa. Loistava myyjä ja etenkin tiistai- ja perjantai-iltoina runsaasti paikallisia opiskelijoita.',
      en: 'Not a bad word. Great salesperson and especially on Tuesday and Friday nights there are plenty of local students.',
    },
    tags: ['students', 'owner'],
    likes: 2,
    avatarColor: 'bg-purple-600',
  },
  {
    id: 'rev-sami',
    author: 'Sami Kontio',
    isLocalGuide: true,
    reviewCount: 43,
    photoCount: 125,
    rating: 5,
    date: {
      fi: 'Muokattu vuosi sitten',
      en: 'Edited a year ago',
    },
    text: {
      fi: 'Paras opiskelijapaikka! Ruoka: 5/5, Palvelu: 5/5.',
      en: 'The best student place. Food: 5/5, Service: 5/5.',
    },
    tags: ['students', 'food'],
    likes: 4,
    avatarColor: 'bg-rose-600',
  },
  {
    id: 'rev-janne',
    author: 'Janne Jäppinen',
    isLocalGuide: true,
    reviewCount: 7,
    rating: 5,
    date: {
      fi: '4 vuotta sitten',
      en: '4 years ago',
    },
    text: {
      fi: 'Loistavaa ruokaa (kun saatavilla) ja loistavia juomia opiskelijaystävällisessä ilmapiirissä.',
      en: 'Great food (when available) and great drinks with a student-friendly atmosphere.',
    },
    tags: ['food', 'drink'],
    likes: 1,
    avatarColor: 'bg-teal-600',
  },
  {
    id: 'rev-whitelilly',
    author: 'White Lilly',
    isLocalGuide: true,
    reviewCount: 98,
    photoCount: 274,
    rating: 5,
    date: {
      fi: '7 vuotta sitten',
      en: '7 years ago',
    },
    text: {
      fi: 'Mukava kotoisa paikka ja baarimikko on erittäin ystävällinen!',
      en: 'Nice cozy place and the barmen is very friendly!',
    },
    tags: ['owner'],
    likes: 1,
    avatarColor: 'bg-pink-600',
  },
  {
    id: 'rev-ben',
    author: 'Ben',
    reviewCount: 10,
    rating: 5,
    date: {
      fi: '5 vuotta sitten',
      en: '5 years ago',
    },
    text: {
      fi: 'Hyvät kannut! (Good jugs)',
      en: 'Good jugs.',
    },
    tags: ['pitchers', 'drink'],
    likes: 5,
    avatarColor: 'bg-indigo-600',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-bright-interior',
    category: 'vibe',
    title: {
      fi: 'Cafe Bar G Sisätilat & Tiskiemme Loisto',
      en: 'Cafe Bar G Modern Nordic Interior',
    },
    caption: {
      fi: 'Valoisat skandinaaviset tilat, tammihuonekalut ja lämmin opiskelijatunnelma',
      en: 'Bright Scandinavian interior, natural oak tables and warm student ambiance',
    },
    imageUrl: '/src/assets/images/cafe_bar_g_bright_1790073735606.jpg',
    tagText: 'Modern Vibe',
  },
  {
    id: 'photo-patio-exterior',
    category: 'campus',
    title: {
      fi: 'Laserkatu 8 Terassi & LUT Kampus',
      en: 'Laserkatu 8 Summer Terrace & LUT Campus',
    },
    caption: {
      fi: 'Aurinkoinen kesäterassi ja sisäänkäynti Ylioppilastalon takana',
      en: 'Sunny summer terrace patio and entrance behind Student Union House',
    },
    imageUrl: '/src/assets/images/cafe_bar_g_patio_1790073757590.jpg',
    tagText: 'Terrace & Campus',
  },
  {
    id: 'photo-gyros',
    category: 'food_drink',
    title: {
      fi: 'Aito Kreikkalainen Gyros Lautanen',
      en: 'Authentic Greek Gyros Platter',
    },
    caption: {
      fi: 'Mehevää gyros-lihaa, lämmintä pitaa, rapeita ranskalaisia ja talon tzatzikia',
      en: 'Tender gyros meat, warm pita bread, seasoned fries and tzatziki',
    },
    imageUrl: '/src/assets/images/bar_g_gyros_1790072982580.jpg',
    tagText: 'Greek Food',
  },
  {
    id: 'photo-pitchers',
    category: 'pitchers',
    title: {
      fi: 'Legendaariset Huurteiset Olutkannut (1.5L)',
      en: 'Legendary Ice-Cold Draught Pitchers (1.5L)',
    },
    caption: {
      fi: '1,5 litran jaettavat kannut tuoretta hanaolutta ja lonkeroa',
      en: '1.5-liter sharing draught beer pitchers with thick head foam',
    },
    imageUrl: '/src/assets/images/bar_g_pitchers_1790072997811.jpg',
    tagText: 'Pitchers',
  },
  {
    id: 'photo-fries',
    category: 'french_fries',
    title: {
      fi: 'Rapeat Maustetut Ranskalaiset',
      en: 'Crispy Seasoned French Fries',
    },
    caption: {
      fi: 'Kultaista herkkua ja valkosipulidippiä pubin pöydässä',
      en: 'Golden crispy fries with garlic dipping sauce',
    },
    imageUrl: '/src/assets/images/bar_g_fries_1790073012051.jpg',
    tagText: 'French Fries',
  },
  {
    id: 'photo-burger',
    category: 'food_drink',
    title: {
      fi: 'Gourmet Bar G Burger & Ranskalaiset',
      en: 'Gourmet Bar G Burger & Fries',
    },
    caption: {
      fi: 'Tuhti briossiburger sulatetulla cheddarilla ja rapealla pekonilla',
      en: 'Hearty brioche burger with melted cheddar and crispy bacon',
    },
    imageUrl: '/src/assets/images/bar_g_burger_1790073027095.jpg',
    tagText: 'Burgers',
  },
  {
    id: 'photo-hero',
    category: 'vibe',
    title: {
      fi: 'Iltatunnelma & Opiskelijaelämää',
      en: 'Evening Vibe & Student Gatherings',
    },
    caption: {
      fi: 'Lämmin ja vilkas opiskelijabaarin ilmapiiri iltavalaistuksessa',
      en: 'Warm and lively student bar interior under ambient evening lights',
    },
    imageUrl: '/src/assets/images/bar_g_hero_1790072962320.jpg',
    tagText: 'Night Vibe',
  },
];
