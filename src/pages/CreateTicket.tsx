
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

const CreateTicket = () => {
  const [loading, setLoading] = useState(false);
  const [ticketCreated, setTicketCreated] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    category: '',
    shortDescription: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.shortDescription || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newTicketNumber = `INC${Date.now().toString().slice(-6)}`;
      setTicketNumber(newTicketNumber);
      setTicketCreated(true);
      setLoading(false);
      
      toast({
        title: "Ticket Created Successfully!",
        description: `Your ticket ${newTicketNumber} has been created.`
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (ticketCreated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Ticket Created!</h2>
              <p className="text-gray-600 mb-4">
                Your support ticket has been successfully created.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">Ticket Number:</p>
                <p className="text-xl font-bold text-blue-600">{ticketNumber}</p>
              </div>
              <Button 
                onClick={() => {
                  setTicketCreated(false);
                  setFormData({ category: '', shortDescription: '', description: '' });
                }}
                className="w-full"
              >
                Create Another Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Support Ticket</CardTitle>
            <p className="text-gray-600">
              Fill out the form below to create a new IT support ticket.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hardware">Hardware</SelectItem>
                    <SelectItem value="software">Software</SelectItem>
                    <SelectItem value="network">Network</SelectItem>
                    <SelectItem value="access">Access & Permissions</SelectItem>
                    <SelectItem value="email">Email & Communication</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description *</Label>
                <Input
                  id="shortDescription"
                  placeholder="Brief summary of the issue"
                  value={formData.shortDescription}
                  onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the issue, including steps to reproduce, error messages, etc."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Creating Ticket...
                  </>
                ) : (
                  'Create Ticket'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateTicket;
