import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useDummyJsonProducts } from '@/hooks/useDummyJsonProducts';

const Electronics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useDummyJsonProducts('smartphones', 30);

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Tech Revolution",
      description: "Latest gadgets and electronics",
      image: 'https://source.unsplash.com/1600x600/?electronics'
    },
    {
      id: 'ad2',
      title: "Smart Devices",
      description: "Transform your lifestyle with smart tech",
      image: 'https://source.unsplash.com/1600x600/?gadgets'
    },
    {
      id: 'ad3',
      title: "Innovation at its Best",
      description: "Cutting-edge technology for everyone",
      image: 'https://source.unsplash.com/1600x600/?technology'
    }
  ];

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <div className="text-center py-12">
            <p className="text-red-600">Error loading products: {error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Advertisement Carousel */}
        <div className="mb-8">
          <AdCarousel 
            adItems={adCarouselItems}
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
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : (
            <ProductGrid 
              searchQuery={searchQuery} 
              products={products}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Electronics;
