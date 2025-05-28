import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useDummyJsonProducts } from '@/hooks/useDummyJsonProducts';

const MenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useDummyJsonProducts('mens-shirts', 30);

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Men's Fashion Collection",
      description: "Discover the latest trends in men's fashion",
      image: 'https://source.unsplash.com/1600x600/?men-fashion'
    },
    {
      id: 'ad2', 
      title: "Premium Menswear",
      description: "Elevate your style with our premium collection",
      image: 'https://source.unsplash.com/1600x600/?mens-clothing'
    },
    {
      id: 'ad3',
      title: "Casual & Formal Wear",
      description: "Perfect outfits for every occasion",
      image: 'https://source.unsplash.com/1600x600/?men'
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
