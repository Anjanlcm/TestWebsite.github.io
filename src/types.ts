export type Language = 'fi' | 'en';

export type MenuCategory = 
  | 'all' 
  | 'greek' 
  | 'burgers' 
  | 'fries' 
  | 'pasta' 
  | 'pitchers' 
  | 'drinks' 
  | 'burgers_pasta' 
  | 'fries_snacks' 
  | 'pitchers_drinks';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: {
    fi: string;
    en: string;
  };
  description: {
    fi: string;
    en: string;
  };
  price: number;
  popular?: boolean;
  studentFavorite?: boolean;
  tags?: string[];
  imageUrl?: string;
  image?: string;
  badge?: {
    fi: string;
    en: string;
  };
  highlightNote?: {
    fi: string;
    en: string;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  photoCount?: number;
  rating: number;
  date: {
    fi: string;
    en: string;
  };
  text: {
    fi: string;
    en: string;
  };
  tags: ('pitchers' | 'students' | 'food' | 'owner' | 'drink')[];
  likes: number;
  avatarColor?: string;
}

export type GalleryCategory = 'all' | 'food_drink' | 'vibe' | 'french_fries' | 'pitchers' | 'campus';

export interface GalleryPhoto {
  id: string;
  category: GalleryCategory;
  title: {
    fi: string;
    en: string;
  };
  caption: {
    fi: string;
    en: string;
  };
  imageUrl: string;
  tagText?: string;
}

export interface BarStatus {
  isOpen: boolean;
  textFi: string;
  textEn: string;
  detailFi: string;
  detailEn: string;
  nextChange: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  guildOrOccasion?: string;
  preorderPitchers?: number;
  notes?: string;
}
