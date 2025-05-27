
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';
import { products } from '@/data/products';

const Electronics = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const electronicsProducts = products.filter(product => 
    product.category === 'electronics'
  );

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Tech Revolution",
      description: "Latest gadgets and electronics",
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad2',
      title: "Smart Devices",
      description: "Transform your lifestyle with smart tech",
      image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad3',
      title: "Gaming Zone",
      description: "Ultimate gaming experience awaits",
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
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
            title="Electronics & Gadgets Highlights"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Electronics & Gadgets
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest technology and gadgets with AI-powered product assistance
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="w-full">
          <ProductGrid 
            searchQuery={searchQuery} 
            products={electronicsProducts}
          />
        </div>
      </main>
    </div>
  );
};

export default Electronics;
