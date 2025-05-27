
import React, { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products as allProducts } from '@/data/products';
import { Product } from '@/types/product';

interface ProductGridProps {
  searchQuery: string;
  products?: Product[];
  filters?: {
    priceRange: number[];
    brands: string[];
    categories: string[];
  };
}

export const ProductGrid = ({ searchQuery, products = allProducts, filters }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;

    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply price filter
    if (filters?.priceRange) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    // Apply brand filter
    if (filters?.brands && filters.brands.length > 0) {
      filtered = filtered.filter(product =>
        filters.brands.includes(product.brand)
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, products, filters]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
