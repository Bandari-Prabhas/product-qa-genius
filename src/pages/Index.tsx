
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AdCarousel } from '@/components/AdCarousel';
import { useDummyJsonProducts } from '@/hooks/useDummyJsonProducts';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products: menProducts } = useDummyJsonProducts('mens-shirts', 30);
  const { products: womenProducts } = useDummyJsonProducts('womens-dresses', 30);
  const { products: electronicsProducts } = useDummyJsonProducts('smartphones', 30);
  const { products: jewelryProducts } = useDummyJsonProducts('womens-jewellery', 30);

  // Advertisement carousel items from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Mega Sale - Up to 70% Off",
      description: "Shop the biggest sale of the year on all categories",
      image: 'https://source.unsplash.com/1600x600/?shopping'
    },
    {
      id: 'ad2',
      title: "New Arrivals",
      description: "Discover the latest trends in fashion and electronics",
      image: 'https://source.unsplash.com/1600x600/?ecommerce'
    },
    {
      id: 'ad3',
      title: "Free Shipping",
      description: "Free delivery on orders above ₹1999",
      image: 'https://source.unsplash.com/1600x600/?sale'
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
