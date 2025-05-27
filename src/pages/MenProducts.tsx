import React, { useState, useEffect } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { AnimatedCarousel } from '@/components/AnimatedCarousel';

const MenProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const data = await res.json();

        // Optionally duplicate products to make sure we have 30+
        const repeated = [...data, ...data, ...data]; // Now ~60
        setMenProducts(repeated.slice(0, 30)); // Ensure exactly 30
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Advertisement carousel images from Unsplash
  const adCarouselItems = [
    {
      id: 'ad1',
      title: "Men's Fashion Sale",
      description: "Up to 50% off on premium menswear",
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    },
    {
      id: 'ad2',
      title: "New Arrivals",
      description: "Latest trends in men's clothing",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop',
    },
    {
      id: 'ad3',
      title: "Premium Collection",
      description: "Exclusive designer wear for men",
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=400&fit=crop',
    }
  ];

  // Filter by search query
  const filteredProducts = menProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Page Header and Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Men's Clothing</h1>
          <p className="text-gray-600 mb-6">Discover the latest trends in men's fashion and accessories</p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Product Grid */}
        <div className="w-full">
          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : (
            <ProductGrid
              searchQuery={searchQuery}
              products={filteredProducts}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default MenProducts;
