
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useFakeStoreProducts = (category?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = category 
          ? `https://fakestoreapi.com/products/category/${category}`
          : 'https://fakestoreapi.com/products';
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: FakeStoreProduct[] = await response.json();
        
        // Transform to our Product interface
        const transformedProducts: Product[] = data.map((item) => ({
          id: item.id.toString(),
          title: item.title,
          description: item.description,
          price: Math.round(item.price * 83), // Convert to INR approximately
          image: item.image,
          category: item.category,
          brand: 'Brand', // Fake Store API doesn't provide brand
          rating: item.rating.rate,
          reviews: item.rating.count
        }));
        
        setProducts(transformedProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};
