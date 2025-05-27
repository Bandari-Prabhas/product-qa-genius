
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';
import { CategorySection } from '@/components/CategorySection';
import { products } from '@/data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Shared carousel for all pages - shopping-themed Unsplash images
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

  // Filter products by category
  const menProducts = products.filter(product => 
    product.category === "men's clothing"
  );
  
  const womenProducts = products.filter(product => 
    product.category === "women's clothing"
  );
  
  const electronicsProducts = products.filter(product => 
    product.category === 'electronics'
  );
  
  const jewelryProducts = products.filter(product => 
    product.category === 'jewelery'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Shared Carousel */}
        <div className="mb-8">
          <AnimatedCarousel 
            products={sharedCarouselItems}
            title="Welcome to SmartCart"
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600 mb-6">
            Shop from our wide range of categories and find exactly what you need
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Show search results if there's a search query */}
        {searchQuery.trim() !== '' ? (
          <div className="w-full">
            <ProductGrid searchQuery={searchQuery} />
          </div>
        ) : (
          /* Category Sections */
          <div className="space-y-12">
            <CategorySection 
              title="Men's Clothing"
              description="Discover the latest trends in men's fashion"
              products={menProducts}
              viewAllLink="/men"
            />
            
            <CategorySection 
              title="Women's Clothing"
              description="Explore elegant styles and the latest fashion trends"
              products={womenProducts}
              viewAllLink="/women"
            />
            
            <CategorySection 
              title="Electronics"
              description="Latest technology and gadgets"
              products={electronicsProducts}
              viewAllLink="/electronics"
            />
            
            <CategorySection 
              title="Jewelry"
              description="Beautiful jewelry and accessories for every occasion"
              products={jewelryProducts}
              viewAllLink="/jewelry"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
