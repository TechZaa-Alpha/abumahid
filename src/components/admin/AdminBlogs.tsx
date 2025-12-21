import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { RichTextEditor } from '@/components/RichTextEditor';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

type Blog = Tables<'blogs'>;

export const AdminBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error fetching blogs', description: error.message, variant: 'destructive' });
    } else {
      setBlogs(data || []);
    }
    setIsLoading(false);
  };

  const handleNew = () => {
    setEditingBlog({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      cover_image_url: '',
      tags: [],
      is_published: false,
    });
    setIsEditing(true);
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editingBlog?.title || !editingBlog?.slug) {
      toast({ title: 'Title and slug are required', variant: 'destructive' });
      return;
    }

    const blogData = {
      title: editingBlog.title,
      slug: editingBlog.slug,
      excerpt: editingBlog.excerpt || null,
      content: editingBlog.content || null,
      cover_image_url: editingBlog.cover_image_url || null,
      tags: editingBlog.tags || [],
      is_published: editingBlog.is_published || false,
      published_at: editingBlog.is_published ? new Date().toISOString() : null,
    };

    if (editingBlog.id) {
      const { error } = await supabase
        .from('blogs')
        .update(blogData)
        .eq('id', editingBlog.id);

      if (error) {
        toast({ title: 'Error updating blog', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Blog updated successfully' });
    } else {
      const { error } = await supabase.from('blogs').insert(blogData);

      if (error) {
        toast({ title: 'Error creating blog', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Blog created successfully' });
    }

    setIsEditing(false);
    setEditingBlog(null);
    fetchBlogs();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    const { error } = await supabase.from('blogs').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error deleting blog', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Blog deleted successfully' });
      fetchBlogs();
    }
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(Boolean);
    setEditingBlog(prev => prev ? { ...prev, tags } : null);
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  if (isEditing && editingBlog) {
    return (
      <Card className="border-border">
        <CardHeader>
          <CardTitle>{editingBlog.id ? 'Edit Blog' : 'New Blog'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editingBlog.title || ''}
                onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                placeholder="Blog title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={editingBlog.slug || ''}
                onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                placeholder="blog-url-slug"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              value={editingBlog.excerpt || ''}
              onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
              placeholder="Brief description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_image">Cover Image URL</Label>
            <Input
              id="cover_image"
              value={editingBlog.cover_image_url || ''}
              onChange={(e) => setEditingBlog({ ...editingBlog, cover_image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={editingBlog.tags?.join(', ') || ''}
              onChange={(e) => handleTagsChange(e.target.value)}
              placeholder="react, typescript, tutorial"
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <RichTextEditor
              content={editingBlog.content || ''}
              onChange={(content) => setEditingBlog({ ...editingBlog, content })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_published"
              checked={editingBlog.is_published || false}
              onCheckedChange={(checked) => setEditingBlog({ ...editingBlog, is_published: checked })}
            />
            <Label htmlFor="is_published">Published</Label>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" onClick={() => { setIsEditing(false); setEditingBlog(null); }} className="gap-2">
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Blogs</CardTitle>
        <Button onClick={handleNew} className="gap-2">
          <Plus className="h-4 w-4" />
          New Blog
        </Button>
      </CardHeader>
      <CardContent>
        {blogs.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No blogs yet. Create your first one!</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {blog.is_published ? '✓ Published' : '○ Draft'} • /{blog.slug}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(blog)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(blog.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
