import { ArticleCard } from "@/components/blog/ArticleCard";
import { VideoCard } from "@/components/blog/VideoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Blog, Video } from "@/types";

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
          <p className="text-muted-foreground">
            Articles and video content I've created
          </p>
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
              <p className="text-muted-foreground text-center py-16">
                No articles published yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {blogs.map((blog) => (
                  <ArticleCard key={blog._id} blog={blog} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="videos">
            {videos.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">
                No videos published yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {videos.map((video) => (
                  <VideoCard key={video._id} video={video} />
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
