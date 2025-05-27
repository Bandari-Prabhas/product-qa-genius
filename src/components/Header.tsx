
import React from 'react';
import { ShoppingBag, User, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SmartCart</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/men')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Men
            </button>
            <button 
              onClick={() => navigate('/women')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Women
            </button>
            <button 
              onClick={() => navigate('/electronics')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Electronics
            </button>
            <button 
              onClick={() => navigate('/jewelry')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Jewelry
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/liked')}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/profile')}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
