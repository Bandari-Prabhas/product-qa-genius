
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Search, Headphones, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Headphones className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart IT Support Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get fast, reliable IT support for all your technical needs. 
            Create tickets, track progress, and access our knowledge base.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/create-ticket">
              <Button size="lg" className="w-full md:w-auto">
                <Plus className="h-5 w-5 mr-2" />
                Create Support Ticket
              </Button>
            </Link>
            <Link to="/tickets">
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                <Search className="h-5 w-5 mr-2" />
                Check Ticket Status
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Get quick responses to your IT issues with our streamlined ticketing system.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Tracking</h3>
              <p className="text-gray-600">
                Track your ticket status in real-time and get updates on progress.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Base</h3>
              <p className="text-gray-600">
                Access our comprehensive knowledge base for self-service solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/80 backdrop-blur">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/knowledge" className="block">
                <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">Browse Knowledge Base</h3>
                  <p className="text-gray-600">Find answers to common IT questions and issues.</p>
                </div>
              </Link>
              <Link to="/dashboard" className="block">
                <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
                  <p className="text-gray-600">Check ticket statistics and support metrics.</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
