import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Bluetooth Headphones',
    description: 'Experience superior sound quality with these premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium leather cushions for maximum comfort. Perfect for music lovers and professionals.',
    price: 7999,
    originalPrice: 12999,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    brand: 'AudioMax',
    rating: 4.5,
    reviews: 1247,
    material: 'Premium Leather & Aluminum',
    color: 'Midnight Black',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge - 5 minutes for 2 hours playback',
      'Premium leather ear cushions',
      'Wireless Bluetooth 5.0 connectivity',
      'Built-in microphone for calls'
    ],
    faqs: [
      {
        question: 'Are these headphones waterproof?',
        answer: 'These headphones are water-resistant with IPX4 rating, suitable for sweat and light rain.'
      },
      {
        question: 'How long does the battery last?',
        answer: 'The battery provides up to 30 hours of continuous playback with ANC off, and 20 hours with ANC on.'
      }
    ]
  },
  {
    id: '2',
    title: 'Cotton Casual T-Shirt for Men',
    description: 'Comfortable 100% cotton t-shirt perfect for casual wear. Soft fabric, durable construction, and classic fit make this an essential wardrobe piece. Available in multiple colors and sizes.',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'Men',
    brand: 'ComfortWear',
    rating: 4.2,
    reviews: 856,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    material: '100% Cotton',
    color: 'Navy Blue',
    features: [
      '100% premium cotton fabric',
      'Pre-shrunk for perfect fit',
      'Reinforced shoulder seams',
      'Tagless for comfort',
      'Machine washable'
    ]
  },
  {
    id: '3',
    title: 'Waterproof Sports Watch',
    description: 'Durable sports watch with waterproof design, perfect for athletes and outdoor enthusiasts. Features GPS tracking, heart rate monitor, and 7-day battery life.',
    price: 4599,
    originalPrice: 6999,
    discount: 34,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Accessories',
    brand: 'SportTech',
    rating: 4.6,
    reviews: 432,
    material: 'Titanium & Silicone',
    color: 'Space Gray',
    features: [
      'Waterproof up to 50 meters',
      'GPS tracking with route mapping',
      'Heart rate monitoring',
      '7-day battery life',
      'Multiple sport modes',
      'Sleep tracking'
    ],
    faqs: [
      {
        question: 'Is this watch waterproof for swimming?',
        answer: 'Yes, this watch is waterproof up to 50 meters and is perfect for swimming and water sports.'
      },
      {
        question: 'Does it work with both Android and iPhone?',
        answer: 'Yes, the watch is compatible with both Android and iOS devices through our mobile app.'
      }
    ]
  },
  {
    id: '4',
    title: 'Leather Messenger Bag',
    description: 'Handcrafted genuine leather messenger bag perfect for professionals. Features multiple compartments, laptop sleeve, and adjustable strap. Combines style with functionality.',
    price: 3299,
    originalPrice: 4999,
    discount: 34,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Accessories',
    brand: 'LeatherCraft',
    rating: 4.7,
    reviews: 234,
    material: 'Genuine Leather',
    color: 'Brown',
    features: [
      'Genuine leather construction',
      'Laptop compartment fits up to 15 inches',
      'Multiple organizing pockets',
      'Adjustable shoulder strap',
      'Magnetic closure',
      'Handcrafted quality'
    ]
  },
  {
    id: '5',
    title: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair designed for long hours of comfortable sitting. Features lumbar support, adjustable height, and breathable mesh back.',
    price: 12999,
    originalPrice: 18999,
    discount: 32,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    category: 'Furniture',
    brand: 'ErgoComfort',
    rating: 4.4,
    reviews: 567,
    material: 'Mesh & Steel',
    color: 'Black',
    features: [
      'Ergonomic lumbar support',
      'Adjustable seat height',
      'Breathable mesh backrest',
      '360-degree swivel',
      'Durable steel frame',
      '5-year warranty'
    ]
  },
  {
    id: '6',
    title: 'Stainless Steel Water Bottle',
    description: 'Double-wall insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly design.',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    category: 'Home & Kitchen',
    brand: 'HydroLife',
    rating: 4.3,
    reviews: 789,
    material: 'Stainless Steel',
    color: 'Matte Black',
    features: [
      'Double-wall vacuum insulation',
      'Keeps cold for 24 hours',
      'Keeps hot for 12 hours',
      'BPA-free construction',
      'Leak-proof cap',
      '500ml capacity'
    ],
    faqs: [
      {
        question: 'Is this bottle dishwasher safe?',
        answer: 'The bottle is dishwasher safe, but we recommend hand washing to maintain the finish.'
      },
      {
        question: 'Can I put carbonated drinks in this bottle?',
        answer: 'Yes, this bottle is suitable for carbonated beverages and will maintain the fizz.'
      }
    ]
  },
  {
    id: '7',
    title: 'Men\'s Formal Dress Shirt',
    description: 'Premium cotton dress shirt perfect for office and formal occasions. Features non-iron technology and classic fit.',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
    category: 'Men',
    brand: 'FormalFit',
    rating: 4.3,
    reviews: 324,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Black'],
    material: '100% Cotton',
    color: 'White',
    features: [
      'Non-iron technology',
      'Classic fit design',
      'Mother of pearl buttons',
      'Spread collar',
      'Machine washable'
    ]
  },
  {
    id: '8',
    title: 'Men\'s Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology. Perfect for daily runs and gym workouts.',
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Men',
    brand: 'RunMax',
    rating: 4.6,
    reviews: 892,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Blue', 'Gray'],
    material: 'Mesh & Rubber',
    color: 'Black',
    features: [
      'Advanced cushioning technology',
      'Breathable mesh upper',
      'Durable rubber outsole',
      'Lightweight design',
      'Arch support'
    ]
  }
];

// Featured products for carousel (mix of categories)
export const featuredProducts = products.filter(product => 
  ['1', '2', '7', '8', '3'].includes(product.id)
);
