
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus, List, Book, BarChart3, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Smart IT Support Portal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Link to="/create-ticket">
              <Button 
                variant={isActive('/create-ticket') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Create Ticket</span>
              </Button>
            </Link>
            <Link to="/tickets">
              <Button 
                variant={isActive('/tickets') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>My Tickets</span>
              </Button>
            </Link>
            <Link to="/knowledge">
              <Button 
                variant={isActive('/knowledge') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Book className="h-4 w-4" />
                <span>Knowledge Base</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant={isActive('/dashboard') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </Link>
          </div>

          <Link to="/login">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
