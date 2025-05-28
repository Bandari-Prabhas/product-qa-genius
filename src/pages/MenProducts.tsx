
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useFakeStoreProducts } from '@/hooks/useFakeStoreProducts';

const MenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useFakeStoreProducts("men's clothing");

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Men's Fashion Sale",
      description: "Up to 50% off on premium menswear",
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad2', 
      title: "New Arrivals",
      description: "Latest trends in men's clothing",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad3',
      title: "Premium Collection",
      description: "Exclusive designer wear for men",
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=400&fit=crop'
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
            title="Men's Collection Highlights"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Men's Clothing
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest trends in men's fashion and accessories
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

export default MenProducts;
