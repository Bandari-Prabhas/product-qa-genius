
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { FilterSidebar } from '@/components/FilterSidebar';
import { products } from '@/data/products';

const Electronics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    brands: [],
    categories: []
  });

  const electronicsProducts = products.filter(product => 
    product.category === 'Electronics'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Electronics & Gadgets
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest technology and gadgets with AI-powered product assistance
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar 
              products={electronicsProducts} 
              onFiltersChange={setFilters}
            />
          </div>
          <div className="w-3/4">
            <ProductGrid 
              searchQuery={searchQuery} 
              products={electronicsProducts}
              filters={filters}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Electronics;
