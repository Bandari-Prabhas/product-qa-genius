
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

export const useLikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('likedProducts');
    if (stored) {
      setLikedProducts(JSON.parse(stored));
    }
  }, []);

  const toggleLike = (product: Product) => {
    const isLiked = likedProducts.some(p => p.id === product.id);
    let newLiked;
    
    if (isLiked) {
      newLiked = likedProducts.filter(p => p.id !== product.id);
    } else {
      newLiked = [...likedProducts, product];
    }
    
    setLikedProducts(newLiked);
    localStorage.setItem('likedProducts', JSON.stringify(newLiked));
  };

  const isLiked = (productId: string) => {
    return likedProducts.some(p => p.id === productId);
  };

  const clearAllLiked = () => {
    setLikedProducts([]);
    localStorage.removeItem('likedProducts');
  };

  return {
    likedProducts,
    toggleLike,
    isLiked,
    clearAllLiked
  };
};
