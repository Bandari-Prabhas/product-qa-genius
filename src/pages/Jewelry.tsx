
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useDummyJsonProducts } from '@/hooks/useDummyJsonProducts';

const Jewelry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useDummyJsonProducts('womens-jewellery', 30);

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Luxury Jewelry",
      description: "Exquisite pieces for special moments",
      image: 'https://source.unsplash.com/1600x600/?jewelry'
    },
    {
      id: 'ad2',
      title: "Diamond Collection",
      description: "Sparkle with our premium diamond jewelry",
      image: 'https://source.unsplash.com/1600x600/?ecommerce'
    },
    {
      id: 'ad3',
      title: "Wedding Jewelry",
      description: "Perfect pieces for your special day",
      image: 'https://source.unsplash.com/1600x600/?shopping'
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

export default Jewelry;
