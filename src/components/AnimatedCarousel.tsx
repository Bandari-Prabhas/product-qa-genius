
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useNavigate } from 'react-router-dom';
import { useLikedProducts } from '@/hooks/useLikedProducts';

interface AnimatedCarouselProps {
  products: Product[];
  title?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const AnimatedCarousel = ({ 
  products, 
  title = "Featured Products", 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: AnimatedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { toggleLike, isLiked } = useLikedProducts();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isHovered && products.length > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, isHovered, autoPlayInterval, products.length]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleLikeClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    toggleLike(product);
  };

  if (products.length === 0) return null;

  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-6 pb-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600">Discover our handpicked selection</p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative h-96 mx-6 mb-6 mt-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div className="relative h-full overflow-hidden rounded-xl">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentIndex
                  ? 'translate-x-0 opacity-100 scale-100'
                  : index < currentIndex
                  ? '-translate-x-full opacity-0 scale-95'
                  : 'translate-x-full opacity-0 scale-95'
              }`}
            >
              <Card 
                className="h-full cursor-pointer group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Discount Badge */}
                {product.discount && (
                  <Badge 
                    variant="destructive" 
                    className="absolute top-4 left-4 z-10 px-3 py-1 text-sm font-bold animate-pulse"
                  >
                    {product.discount}% OFF
                  </Badge>
                )}

                {/* Like Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white transition-all duration-300"
                  onClick={(e) => handleLikeClick(e, product)}
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors duration-300 ${
                      isLiked(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`} 
                  />
                </Button>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1 line-clamp-2 group-hover:text-blue-200 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-200">{product.brand}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-300 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${
                                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-300">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {products.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {products.length > 1 && (
        <div className="flex justify-center space-x-2 pb-6">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

