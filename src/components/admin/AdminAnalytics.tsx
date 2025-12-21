import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Eye, TrendingUp, Users, Clock } from 'lucide-react';

interface PageViewStats {
  total_views: number;
  unique_visitors: number;
  top_pages: { path: string; count: number }[];
  recent_views: number;
}

export const AdminAnalytics = () => {
  const [stats, setStats] = useState<PageViewStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get total views
      const { count: totalViews } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true });

      // Get unique visitors (by ip_hash)
      const { data: uniqueData } = await supabase
        .from('page_views')
        .select('ip_hash')
        .not('ip_hash', 'is', null);

      const uniqueVisitors = new Set(uniqueData?.map(d => d.ip_hash)).size;

      // Get views in last 24 hours
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      const { count: recentViews } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', yesterday.toISOString());

      // Get top pages
      const { data: pageData } = await supabase
        .from('page_views')
        .select('path');

      const pathCounts: Record<string, number> = {};
      pageData?.forEach(p => {
        pathCounts[p.path] = (pathCounts[p.path] || 0) + 1;
      });

      const topPages = Object.entries(pathCounts)
        .map(([path, count]) => ({ path, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setStats({
        total_views: totalViews || 0,
        unique_visitors: uniqueVisitors,
        top_pages: topPages,
        recent_views: recentViews || 0,
      });
    } catch (error: any) {
      toast({ title: 'Error fetching analytics', description: error.message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">{stats?.total_views || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold">{stats?.unique_visitors || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last 24 Hours</p>
                <p className="text-2xl font-bold">{stats?.recent_views || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Top Pages</p>
                <p className="text-2xl font-bold">{stats?.top_pages?.length || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          {stats?.top_pages && stats.top_pages.length > 0 ? (
            <div className="space-y-3">
              {stats.top_pages.map((page, index) => (
                <div key={page.path} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-primary">#{index + 1}</span>
                    <span className="font-mono text-sm">{page.path}</span>
                  </div>
                  <span className="text-muted-foreground">{page.count} views</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No page view data yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
