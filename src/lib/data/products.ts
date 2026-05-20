export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Velvet Serum',
    category: 'Serum',
    price: 48,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    description: 'Lightweight hydration serum for luminous skin.'
  },
  {
    id: 2,
    name: 'Moon Cream',
    category: 'Moisturizer',
    price: 62,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=800&auto=format&fit=crop',
    description: 'Rich overnight cream crafted for deep repair.'
  },
  {
    id: 3,
    name: 'Lumière Oil',
    category: 'Face Oil',
    price: 54,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop',
    description: 'Botanical glow oil with a silky finish.'
  },
  {
    id: 4,
    name: 'Rose Cleanser',
    category: 'Cleanser',
    price: 36,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
    description: 'Gentle rose cleanser for calm everyday rituals.'
  },
  {
    id: 5,
    name: 'Dew Drop Serum',
    category: 'Serum',
    price: 56,
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=800&auto=format&fit=crop',
    description: 'Vitamin C brightening serum for even skin tone.'
  },
  {
    id: 6,
    name: 'Petal Toner',
    category: 'Toner',
    price: 34,
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=800&auto=format&fit=crop',
    description: 'Balancing floral toner that preps skin for moisture.'
  },
  {
    id: 7,
    name: 'Cloud Moisturizer',
    category: 'Moisturizer',
    price: 58,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    description: 'Whipped day cream with SPF-ready hydration.'
  },
  {
    id: 8,
    name: 'Soft Clay Mask',
    category: 'Mask',
    price: 44,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
    description: 'Purifying kaolin clay mask that clears pores and softens skin.'
  },
  {
    id: 9,
    name: 'Midnight Balm',
    category: 'Face Oil',
    price: 68,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=800&auto=format&fit=crop',
    description: 'Nourishing overnight balm with rosehip and sea buckthorn.'
  },
  {
    id: 10,
    name: 'Calm Foam Wash',
    category: 'Cleanser',
    price: 32,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=800&auto=format&fit=crop',
    description: 'Airy foam cleanser that melts away impurities gently.'
  },
  {
    id: 11,
    name: 'Glow Essence',
    category: 'Toner',
    price: 42,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
    description: 'Fermented essence that boosts radiance with every use.'
  },
  {
    id: 12,
    name: 'Renewal Retinol',
    category: 'Serum',
    price: 72,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
    description: 'Gentle retinol serum for smooth, youthful-looking skin.'
  }
];
