
import React, { useState } from 'react';
import { Send, Bot, User, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { generateAnswer } from '@/utils/nlpService';

interface ProductQAProps {
  product: Product;
}

interface QAItem {
  id: string;
  question: string;
  answer: string;
  confidence: number;
  timestamp: Date;
}

export const ProductQA = ({ product }: ProductQAProps) => {
  const [question, setQuestion] = useState('');
  const [qaHistory, setQaHistory] = useState<QAItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "What material is this made of?",
    "Is this waterproof?",
    "What are the key features?",
    "How should I care for this product?",
    "What size should I choose?",
    "Is this suitable for daily use?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await generateAnswer(question, product);
      
      const newQA: QAItem = {
        id: Date.now().toString(),
        question: question.trim(),
        answer: response.answer,
        confidence: response.confidence,
        timestamp: new Date()
      };
      
      setQaHistory(prev => [newQA, ...prev]);
      setQuestion('');
    } catch (error) {
      console.error('Error generating answer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (suggestedQ: string) => {
    setQuestion(suggestedQ);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100 text-green-800';
    if (confidence >= 0.6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.8) return 'High Confidence';
    if (confidence >= 0.6) return 'Medium Confidence';
    return 'Low Confidence';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">AI Product Assistant</h3>
        <p className="text-gray-600">
          Ask me anything about this product! I'll analyze the product information to give you accurate answers.
        </p>
      </div>

      {/* Question Input */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask any question about this product..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !question.trim()}>
            {isLoading ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>

      {/* Suggested Questions */}
      <div>
        <h4 className="font-medium mb-3 flex items-center">
          <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
          Suggested Questions
        </h4>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((suggestedQ, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSuggestedQuestion(suggestedQ)}
              className="text-xs"
            >
              {suggestedQ}
            </Button>
          ))}
        </div>
      </div>

      {/* Q&A History */}
      {qaHistory.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium">Recent Questions & Answers</h4>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {qaHistory.map((qa) => (
              <Card key={qa.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{qa.question}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Bot className="h-5 w-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-gray-700">{qa.answer}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge className={getConfidenceColor(qa.confidence)}>
                          {getConfidenceText(qa.confidence)} ({Math.round(qa.confidence * 100)}%)
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {qa.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
