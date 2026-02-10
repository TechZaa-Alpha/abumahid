import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

type Blog = Tables<'blogs'>;

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();
      setBlog(data);
      setIsLoading(false);
    };
    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <Link to="/blogs" className="text-primary hover:underline">← Back to blogs</Link>
        </div>
      </div>
    );
  }

  const formattedDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </Link>

        {/* Cover image */}
        {blog.cover_image_url && (
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg border-2 border-border mb-8 animate-fade-in">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-delay-1">
          {formattedDate && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
          )}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/40 text-primary/80">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-lg text-muted-foreground mb-8 border-l-2 border-primary pl-4 animate-fade-in-delay-2">
            {blog.excerpt}
          </p>
        )}

        {/* Content */}
        {blog.content && (
          <article className="prose max-w-none animate-fade-in-delay-3" dangerouslySetInnerHTML={{ __html: blog.content }} />
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
