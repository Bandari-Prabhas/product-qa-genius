
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

  // Shared carousel - same as home page
  const sharedCarouselItems = [
    {
      id: 'shared1',
      title: "Welcome to SmartCart",
      description: "Your one-stop shop for everything you need",
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'shared2',
      title: "Mega Sale Event",
      description: "Up to 70% off on all categories",
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'shared3',
      title: "Free Shipping",
      description: "On orders above ₹999",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'shared4',
      title: "New Arrivals",
      description: "Discover the latest trends and products",
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop',
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
        {/* Shared Carousel */}
        <div className="mb-8">
          <AnimatedCarousel 
            products={sharedCarouselItems}
            title="SmartCart Shopping"
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
