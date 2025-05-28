
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useFakeStoreProducts } from '@/hooks/useFakeStoreProducts';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products: menProducts } = useFakeStoreProducts("men's clothing");
  const { products: womenProducts } = useFakeStoreProducts("women's clothing");
  const { products: electronicsProducts } = useFakeStoreProducts("electronics");
  const { products: jewelryProducts } = useFakeStoreProducts("jewelery");

  // Advertisement carousel items from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Mega Sale - Up to 70% Off",
      description: "Shop the biggest sale of the year on all categories",
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad2',
      title: "New Arrivals",
      description: "Discover the latest trends in fashion and electronics",
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop'
    },
    {
      id: 'ad3',
      title: "Free Shipping",
      description: "Free delivery on orders above ₹1999",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Advertisement Carousel */}
        <div className="mb-8">
          <AdCarousel 
            adItems={adCarouselItems}
            title="Today's Best Deals"
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600 mb-6">
            Explore our vast collection across all categories
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          {/* Men's Clothing Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Men's Clothing</h2>
              <button 
                onClick={() => window.location.href = '/men'}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </button>
            </div>
            <ProductGrid searchQuery={searchQuery} products={menProducts.slice(0, 8)} />
          </section>

          {/* Women's Clothing Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Women's Clothing</h2>
              <button 
                onClick={() => window.location.href = '/women'}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </button>
            </div>
            <ProductGrid searchQuery={searchQuery} products={womenProducts.slice(0, 8)} />
          </section>

          {/* Electronics Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Electronics</h2>
              <button 
                onClick={() => window.location.href = '/electronics'}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </button>
            </div>
            <ProductGrid searchQuery={searchQuery} products={electronicsProducts.slice(0, 8)} />
          </section>

          {/* Jewelry Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Jewelry</h2>
              <button 
                onClick={() => window.location.href = '/jewelry'}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </button>
            </div>
            <ProductGrid searchQuery={searchQuery} products={jewelryProducts.slice(0, 8)} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
