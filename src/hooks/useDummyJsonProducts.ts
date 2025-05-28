
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

export const useDummyJsonProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
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
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch products and categories in parallel
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('https://dummyjson.com/products?limit=50'),
          fetch('https://dummyjson.com/products/categories')
        ]);

        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();

        const transformedProducts = productsData.products.map(transformProduct);
        
        setProducts(transformedProducts);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, loading, error };
};

