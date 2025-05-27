import React, { useState, useEffect } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';

const MenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        // Duplicate products to reach at least 30 items
        const duplicated = [];
        while (duplicated.length < 30) {
          duplicated.push(...data);
        }
        setMenProducts(duplicated.slice(0, 30));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch men's products:", error);
        setLoading(false);
      });
  }, []);

  // Updated carousel images
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Men's Fashion Trends",
      description: "Explore the latest in men's fashion",
      image: 'https://images.unsplash.com/photo-1602810318383-1a6a1c1b6b1c?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad2',
      title: "Stylish Men's Wear",
      description: "Upgrade your wardrobe with new styles",
      image: 'https://images.unsplash.com/photo-1618354691373-1f1a1c1b6b1c?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    },
    {
      id: 'ad3',
      title: "Trending Looks",
      description: "Stay ahead with the latest trends",
      image: 'https://images.unsplash.com/photo-1622810318383-1a6a1c1b6b1c?w=1200&h=400&fit=crop',
      category: 'Advertisement',
      brand: 'SmartCart',
      rating: 5,
      reviews: 0,
      price: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Advertisement Carousel */}
        <div className="mb-8">
          <AnimatedCarousel
            products={adCarouselItems}
            title="Men's Collection Highlights"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Men's Clothing
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest trends in men's fashion and accessories
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="w-full">
          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : (
            <ProductGrid
              searchQuery={searchQuery}
              products={menProducts}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default MenProducts;
