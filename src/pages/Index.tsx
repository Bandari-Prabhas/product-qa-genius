
import React, { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600 mb-6">
            Ask intelligent questions about any product using our AI-powered Q&A system
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <ProductGrid searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default Index;
