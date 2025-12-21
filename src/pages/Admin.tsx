import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { LogOut, FileText, Briefcase, MessageSquare, BarChart3 } from 'lucide-react';
import { AdminBlogs } from '@/components/admin/AdminBlogs';
import { AdminProjects } from '@/components/admin/AdminProjects';
import { AdminContacts } from '@/components/admin/AdminContacts';
import { AdminAnalytics } from '@/components/admin/AdminAnalytics';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/admin/login');
        return;
      }

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .single();

      if (!roleData) {
        toast({
          title: 'Access denied',
          description: 'You do not have admin privileges.',
          variant: 'destructive',
        });
        navigate('/admin/login');
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      navigate('/admin/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary neon-glow">Admin Panel</h1>
            <p className="text-muted-foreground mt-1">Manage your portfolio content</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="blogs" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="blogs" className="gap-2">
              <FileText className="h-4 w-4" />
              Blogs
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Contacts
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blogs">
            <AdminBlogs />
          </TabsContent>

          <TabsContent value="projects">
            <AdminProjects />
          </TabsContent>

          <TabsContent value="contacts">
            <AdminContacts />
          </TabsContent>

          <TabsContent value="analytics">
            <AdminAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
