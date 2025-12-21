import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Trash2, Check, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Tables } from '@/integrations/supabase/types';

type Contact = Tables<'contacts'>;

export const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error fetching contacts', description: error.message, variant: 'destructive' });
    } else {
      setContacts(data || []);
    }
    setIsLoading(false);
  };

  const handleMarkRead = async (id: string) => {
    const { error } = await supabase
      .from('contacts')
      .update({ is_read: true })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error updating contact', description: error.message, variant: 'destructive' });
    } else {
      fetchContacts();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    const { error } = await supabase.from('contacts').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error deleting contact', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Message deleted' });
      fetchContacts();
    }
  };

  const handleViewContact = async (contact: Contact) => {
    setSelectedContact(contact);
    if (!contact.is_read) {
      handleMarkRead(contact.id);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  const unreadCount = contacts.filter(c => !c.is_read).length;

  return (
    <>
      <Card className="border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Contact Messages</CardTitle>
            {unreadCount > 0 && (
              <Badge variant="default">{unreadCount} unread</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {contacts.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    contact.is_read ? 'border-border' : 'border-primary bg-primary/5'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Mail className={`h-4 w-4 ${contact.is_read ? 'text-muted-foreground' : 'text-primary'}`} />
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      {!contact.is_read && <Badge variant="secondary" className="text-xs">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.email}</p>
                    <p className="text-sm truncate">{contact.subject || 'No subject'}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(contact.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" onClick={() => handleViewContact(contact)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    {!contact.is_read && (
                      <Button variant="outline" size="sm" onClick={() => handleMarkRead(contact.id)}>
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={() => handleDelete(contact.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message from {selectedContact?.name}</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{selectedContact.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Subject</p>
                <p>{selectedContact.subject || 'No subject'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Message</p>
                <p className="whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Received</p>
                <p>{new Date(selectedContact.created_at).toLocaleString()}</p>
              </div>
              <Button asChild className="gap-2">
                <a href={`mailto:${selectedContact.email}`}>
                  <Mail className="h-4 w-4" />
                  Reply via Email
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
