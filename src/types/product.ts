
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
  material?: string;
  color?: string;
  features?: string[];
  faqs?: FAQ[];
  reviews_text?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface QAResponse {
  answer: string;
  confidence: number;
  source?: string;
}
