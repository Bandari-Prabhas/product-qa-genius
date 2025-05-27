
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { FilterSidebar } from '@/components/FilterSidebar';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';
import { products } from '@/data/products';

const MenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    brands: [],
    categories: []
  });

  const menProducts = products.filter(product => 
    product.category === 'Men' || product.category === 'Fashion'
  );

  const featuredMenProducts = menProducts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Hero Carousel */}
        <div className="mb-8">
          <AnimatedCarousel 
            products={featuredMenProducts}
            title="Featured Men's Collection"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Men's Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest trends in men's fashion and accessories
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar 
              products={menProducts} 
              onFiltersChange={setFilters}
            />
          </div>
          <div className="w-3/4">
            <ProductGrid 
              searchQuery={searchQuery} 
              products={menProducts}
              filters={filters}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenProducts;

