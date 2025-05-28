
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useFakeStoreProducts } from '@/hooks/useFakeStoreProducts';

const WomenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useFakeStoreProducts("women's clothing");

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Women's Fashion Week",
      description: "Exclusive collection for modern women",
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad2',
      title: "Spring Collection",
      description: "Fresh styles for the new season",
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad3',
      title: "Designer Dresses",
      description: "Elegant dresses for every occasion",
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=400&fit=crop'
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
