
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const useDummyJsonProducts = (category?: string, limit: number = 30) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const transformProduct = (dummyProduct: DummyJsonProduct): Product => ({
    id: dummyProduct.id.toString(),
    title: dummyProduct.title,
    description: dummyProduct.description,
    price: Math.round(dummyProduct.price * 83), // Convert USD to INR approximately
    originalPrice: dummyProduct.discountPercentage > 0 
      ? Math.round((dummyProduct.price * 83) / (1 - dummyProduct.discountPercentage / 100))
      : undefined,
    discount: dummyProduct.discountPercentage > 0 ? Math.round(dummyProduct.discountPercentage) : undefined,
    image: dummyProduct.thumbnail,
    category: dummyProduct.category,
    brand: dummyProduct.brand,
    rating: dummyProduct.rating,
    reviews: Math.floor(Math.random() * 1000) + 100, // Random review count
    features: [
      'High quality construction',
      'Durable materials',
      'Excellent design',
      'Great value for money'
    ]
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        let url = `https://dummyjson.com/products?limit=${limit}`;
        
        if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        }
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        const transformedProducts = data.products.map(transformProduct);
        
        setProducts(transformedProducts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, limit]);

  return { products, loading, error };
};
