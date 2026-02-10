import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { VideoCard } from '@/components/blog/VideoCard';
import type { Tables } from '@/integrations/supabase/types';

type Blog = Tables<'blogs'>;

interface Video {
  id: string;
  video_title: string;
  short_description: string | null;
  content_link: string;
  is_published: boolean | null;
  created_at: string;
  updated_at: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [blogsRes, videosRes] = await Promise.all([
        supabase.from('blogs').select('*').eq('is_published', true).order('published_at', { ascending: false }),
        supabase.from('videos').select('*').eq('is_published', true).order('created_at', { ascending: false }),
      ]);
      setBlogs(blogsRes.data || []);
      setVideos((videosRes.data as Video[]) || []);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            <span className="text-primary neon-text-pulse">/</span>blogs
          </h1>
          <p className="text-muted-foreground">Articles and video content I've created</p>
        </div>

        <Tabs defaultValue="articles" className="animate-fade-in-delay-1">
          <TabsList className="bg-card border border-border mb-8">
            <TabsTrigger
              value="articles"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_10px_hsl(var(--neon-glow)/0.4)]"
            >
              📝 Articles
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_10px_hsl(var(--neon-glow)/0.4)]"
            >
              🎬 Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            {blogs.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">No articles published yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {blogs.map((blog) => (
                  <ArticleCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="videos">
            {videos.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">No videos published yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Blogs;
