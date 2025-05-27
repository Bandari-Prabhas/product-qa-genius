
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
  viewAllLink: string;
}

export const CategorySection = ({ title, description, products, viewAllLink }: CategorySectionProps) => {
  const navigate = useNavigate();

  // Show first 8 products on homepage
  const displayProducts = products.slice(0, 8);

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigate(viewAllLink)}
          className="flex items-center space-x-2"
        >
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show count */}
      <div className="text-center">
        <p className="text-gray-600">
          Showing {displayProducts.length} of {products.length} products
        </p>
      </div>
    </section>
  );
};
