
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface FilterSidebarProps {
  products: Product[];
  onFiltersChange: (filters: any) => void;
}

export const FilterSidebar = ({ products, onFiltersChange }: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brands = [...new Set(products.map(p => p.brand))];
  const maxPrice = Math.max(...products.map(p => p.price));

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    
    setSelectedBrands(newBrands);
    onFiltersChange({
      priceRange,
      brands: newBrands,
      categories: []
    });
  };

  const handlePriceChange = (newRange: number[]) => {
    setPriceRange(newRange);
    onFiltersChange({
      priceRange: newRange,
      brands: selectedBrands,
      categories: []
    });
  };

  const clearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedBrands([]);
    onFiltersChange({
      priceRange: [0, maxPrice],
      brands: [],
      categories: []
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={maxPrice}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Brands</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <label htmlFor={brand} className="text-sm font-medium cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
