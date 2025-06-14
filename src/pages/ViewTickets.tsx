
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const ViewTickets = () => {
  // Mock ticket data
  const tickets = [
    {
      id: 'INC123456',
      shortDescription: 'Laptop not connecting to WiFi',
      category: 'Network',
      status: 'In Progress',
      createdDate: '2024-01-15',
      description: 'Unable to connect to office WiFi network after Windows update.'
    },
    {
      id: 'INC123457',
      shortDescription: 'Outlook email sync issues',
      category: 'Software',
      status: 'Open',
      createdDate: '2024-01-14',
      description: 'Emails are not syncing properly in Outlook client.'
    },
    {
      id: 'INC123458',
      shortDescription: 'Printer driver installation',
      category: 'Hardware',
      status: 'Resolved',
      createdDate: '2024-01-12',
      description: 'Need help installing printer drivers for new HP printer.'
    },
    {
      id: 'INC123459',
      shortDescription: 'VPN access request',
      category: 'Access & Permissions',
      status: 'Closed',
      createdDate: '2024-01-10',
      description: 'Request for VPN access to work remotely.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return <AlertCircle className="h-4 w-4" />;
      case 'in progress':
        return <Clock className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'closed':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Support Tickets</h1>
        <p className="text-gray-600">Track the status of your IT support requests</p>
      </div>

      <div className="grid gap-6">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{ticket.shortDescription}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Ticket ID: {ticket.id}</p>
                </div>
                <Badge className={`flex items-center gap-1 ${getStatusColor(ticket.status)}`}>
                  {getStatusIcon(ticket.status)}
                  {ticket.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-sm text-gray-900">{ticket.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Created Date</p>
                  <p className="text-sm text-gray-900">{ticket.createdDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-sm text-gray-900">{ticket.status}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Description</p>
                <p className="text-sm text-gray-700">{ticket.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {tickets.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 text-lg">No tickets found</p>
            <p className="text-gray-400 text-sm mt-2">You haven't created any support tickets yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ViewTickets;
