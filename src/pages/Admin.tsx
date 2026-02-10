import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { LogOut } from 'lucide-react';
import { AdminBlogs } from '@/components/admin/AdminBlogs';
import { AdminVideos } from '@/components/admin/AdminVideos';
import { AdminProjects } from '@/components/admin/AdminProjects';
import { AdminSkills } from '@/components/admin/AdminSkills';
import { AdminContacts } from '@/components/admin/AdminContacts';
import { AdminAnalytics } from '@/components/admin/AdminAnalytics';
import { AdminEducation } from '@/components/admin/AdminEducation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('blogs');
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

  const renderContent = () => {
    switch (activeTab) {
      case 'blogs':
        return <AdminBlogs />;
      case 'videos':
        return <AdminVideos />;
      case 'projects':
        return <AdminProjects />;
      case 'skills':
        return <AdminSkills />;
      case 'contacts':
        return <AdminContacts />;
      case 'education':
        return <AdminEducation />;
      case 'analytics':
        return <AdminAnalytics />;
      default:
        return <AdminBlogs />;
    }
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary neon-glow">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Manage your portfolio content</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
