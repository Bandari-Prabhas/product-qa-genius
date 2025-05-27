
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { FilterSidebar } from '@/components/FilterSidebar';
import { products } from '@/data/products';

const WomenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    brands: [],
    categories: []
  });

  const womenProducts = products.filter(product => 
    product.category === 'Women' || product.category === 'Fashion'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Women's Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Explore elegant styles and the latest fashion trends for women
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar 
              products={womenProducts} 
              onFiltersChange={setFilters}
            />
          </div>
          <div className="w-3/4">
            <ProductGrid 
              searchQuery={searchQuery} 
              products={womenProducts}
              filters={filters}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WomenProducts;
