import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useDummyJsonProducts } from '@/hooks/useDummyJsonProducts';

const WomenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useDummyJsonProducts('womens-dresses', 30);

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Women's Fashion Week",
      description: "Exclusive collection for modern women",
      image: 'https://source.unsplash.com/1600x600/?women-fashion'
    },
    {
      id: 'ad2',
      title: "Spring Collection",
      description: "Fresh styles for the new season",
      image: 'https://source.unsplash.com/1600x600/?womens-clothing'
    },
    {
      id: 'ad3',
      title: "Designer Dresses",
      description: "Elegant dresses for every occasion",
      image: 'https://source.unsplash.com/1600x600/?women'
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
            title="Women's Collection Highlights"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Women's Clothing
          </h1>
          <p className="text-gray-600 mb-6">
            Explore elegant styles and the latest fashion trends for women
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

export default WomenProducts;
