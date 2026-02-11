import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { VideoCard } from '@/components/blog/VideoCard';

// Static placeholder data - replace with your own or fetch from your custom backend
export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  tags: string[] | null;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  video_title: string;
  short_description: string | null;
  content_link: string;
  thumbnail_url: string | null;
  is_published: boolean | null;
  created_at: string;
  updated_at: string;
}

const blogs: Blog[] = [];
const videos: Video[] = [];

const Blogs = () => {
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
