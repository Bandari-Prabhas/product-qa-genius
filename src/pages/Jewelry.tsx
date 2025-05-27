
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';
import { products } from '@/data/products';

const Jewelry = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const jewelryProducts = products.filter(product => 
    product.category === 'jewelery'
  );

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Luxury Jewelry",
      description: "Exquisite pieces for special moments",
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad2',
      title: "Diamond Collection",
      description: "Sparkle with our premium diamond jewelry",
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad3',
      title: "Wedding Jewelry",
      description: "Perfect pieces for your special day",
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Advertisement Carousel */}
        <div className="mb-8">
          <AnimatedCarousel 
            products={adCarouselItems}
            title="Jewelry Collection Highlights"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Jewelry & Accessories
          </h1>
          <p className="text-gray-600 mb-6">
            Discover beautiful jewelry and accessories for every occasion
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="w-full">
          <ProductGrid 
            searchQuery={searchQuery} 
            products={jewelryProducts}
          />
        </div>
      </main>
    </div>
  );
};

export default Jewelry;
