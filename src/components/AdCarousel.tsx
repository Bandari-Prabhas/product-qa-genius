
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AdItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface AdCarouselProps {
  title?: string;
  adItems: AdItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const AdCarousel = ({ 
  title = "Special Offers", 
  adItems, 
  autoPlay = true, 
  autoPlayInterval = 4000 
}: AdCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === adItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? adItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay && !isHovered && adItems.length > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, isHovered, autoPlayInterval, adItems.length]);

  if (adItems.length === 0) return null;

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-6 pb-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600">Don't miss out on these amazing deals</p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative h-80 mx-6 mb-6 mt-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div className="relative h-full overflow-hidden rounded-xl">
          {adItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentIndex
                  ? 'translate-x-0 opacity-100 scale-100'
                  : index < currentIndex
                  ? '-translate-x-full opacity-0 scale-95'
                  : 'translate-x-full opacity-0 scale-95'
              }`}
            >
              <Card className="h-full relative overflow-hidden bg-white shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Overlay with text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {adItems.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {adItems.length > 1 && (
        <div className="flex justify-center space-x-2 pb-6">
          {adItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
