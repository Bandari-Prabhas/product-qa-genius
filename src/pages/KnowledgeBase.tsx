
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const articles = [
    {
      id: '1',
      title: 'How to Connect to Office WiFi',
      category: 'Network',
      tags: ['WiFi', 'Connection', 'Network'],
      summary: 'Step-by-step guide to connect your device to the office WiFi network.',
      content: `
        1. Open WiFi settings on your device
        2. Look for the network name "OfficeWiFi-Secure"
        3. Enter the password provided by IT department
        4. Accept the security certificate if prompted
        5. You should now be connected to the internet
        
        If you continue to have issues, please contact IT support.
      `
    },
    {
      id: '2',
      title: 'Setting up VPN for Remote Work',
      category: 'Access & Permissions',
      tags: ['VPN', 'Remote', 'Security'],
      summary: 'Instructions for configuring VPN access to work from home.',
      content: `
        1. Download the company VPN client from the IT portal
        2. Install the application following the setup wizard
        3. Use your company credentials to log in
        4. Select the appropriate server location
        5. Click connect and verify your connection
        
        For troubleshooting, check the VPN status indicator and ensure your internet connection is stable.
      `
    },
    {
      id: '3',
      title: 'Outlook Email Configuration',
      category: 'Software',
      tags: ['Outlook', 'Email', 'Configuration'],
      summary: 'How to set up and configure Microsoft Outlook for company email.',
      content: `
        1. Open Microsoft Outlook
        2. Go to File > Add Account
        3. Enter your company email address
        4. Outlook will auto-configure the settings
        5. Enter your password when prompted
        6. Complete the setup process
        
        If auto-configuration fails, contact IT for manual server settings.
      `
    },
    {
      id: '4',
      title: 'Printer Setup and Troubleshooting',
      category: 'Hardware',
      tags: ['Printer', 'Setup', 'Troubleshooting'],
      summary: 'Common printer issues and how to resolve them.',
      content: `
        Common printer issues and solutions:
        
        1. Printer not found:
           - Check printer is powered on and connected to network
           - Restart printer and computer
           - Reinstall printer drivers
        
        2. Print quality issues:
           - Check ink/toner levels
           - Run printer cleaning cycle
           - Align print heads if necessary
        
        3. Paper jams:
           - Turn off printer before removing paper
           - Remove paper carefully to avoid tearing
           - Check for any remaining paper fragments
      `
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleArticle = (articleId: string) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Base</h1>
        <p className="text-gray-600 mb-6">Find solutions to common IT issues and questions</p>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-3">{article.summary}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">{article.category}</Badge>
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleArticle(article.id)}
                  className="ml-4"
                >
                  {expandedArticle === article.id ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            
            {expandedArticle === article.id && (
              <CardContent>
                <div className="border-t pt-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                    {article.content}
                  </pre>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 text-lg">No articles found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search terms or browse all articles.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default KnowledgeBase;
