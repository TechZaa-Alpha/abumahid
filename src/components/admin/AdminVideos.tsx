import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Video {
  id: string;
  video_title: string;
  short_description: string | null;
  content_link: string;
  is_published: boolean | null;
  created_at: string;
  updated_at: string;
}

export const AdminVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Partial<Video> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => { fetchVideos(); }, []);

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Error fetching videos', description: error.message, variant: 'destructive' });
    } else {
      setVideos((data as Video[]) || []);
    }
    setIsLoading(false);
  };

  const handleNew = () => {
    setEditingVideo({ video_title: '', short_description: '', content_link: '', is_published: false });
    setIsEditing(true);
  };

  const handleEdit = (video: Video) => { setEditingVideo(video); setIsEditing(true); };

  const handleSave = async () => {
    if (!editingVideo?.video_title || !editingVideo?.content_link) {
      toast({ title: 'Title and content link are required', variant: 'destructive' });
      return;
    }
    const videoData = {
      video_title: editingVideo.video_title,
      short_description: editingVideo.short_description || null,
      content_link: editingVideo.content_link,
      is_published: editingVideo.is_published || false,
    };

    if (editingVideo.id) {
      const { error } = await supabase.from('videos').update(videoData).eq('id', editingVideo.id);
      if (error) { toast({ title: 'Error updating video', description: error.message, variant: 'destructive' }); return; }
      toast({ title: 'Video updated successfully' });
    } else {
      const { error } = await supabase.from('videos').insert(videoData);
      if (error) { toast({ title: 'Error creating video', description: error.message, variant: 'destructive' }); return; }
      toast({ title: 'Video created successfully' });
    }
    setIsEditing(false); setEditingVideo(null); fetchVideos();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this video?')) return;
    const { error } = await supabase.from('videos').delete().eq('id', id);
    if (error) { toast({ title: 'Error deleting video', description: error.message, variant: 'destructive' }); }
    else { toast({ title: 'Video deleted' }); fetchVideos(); }
  };

  if (isLoading) return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>;

  if (isEditing && editingVideo) {
    return (
      <Card className="border-border">
        <CardHeader><CardTitle>{editingVideo.id ? 'Edit Video' : 'New Video'}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Video Title</Label>
            <Input value={editingVideo.video_title || ''} onChange={(e) => setEditingVideo({ ...editingVideo, video_title: e.target.value })} placeholder="Video title" />
          </div>
          <div className="space-y-2">
            <Label>Short Description</Label>
            <Textarea value={editingVideo.short_description || ''} onChange={(e) => setEditingVideo({ ...editingVideo, short_description: e.target.value })} placeholder="Brief description" />
          </div>
          <div className="space-y-2">
            <Label>Content Link (S3 URL)</Label>
            <Input value={editingVideo.content_link || ''} onChange={(e) => setEditingVideo({ ...editingVideo, content_link: e.target.value })} placeholder="https://s3.amazonaws.com/..." />
          </div>
          <div className="flex items-center space-x-2">
            <Switch checked={editingVideo.is_published || false} onCheckedChange={(checked) => setEditingVideo({ ...editingVideo, is_published: checked })} />
            <Label>Published</Label>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" />Save</Button>
            <Button variant="outline" onClick={() => { setIsEditing(false); setEditingVideo(null); }} className="gap-2"><X className="h-4 w-4" />Cancel</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Videos</CardTitle>
        <Button onClick={handleNew} className="gap-2"><Plus className="h-4 w-4" />New Video</Button>
      </CardHeader>
      <CardContent>
        {videos.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No videos yet.</p>
        ) : (
          <div className="space-y-4">
            {videos.map((video) => (
              <div key={video.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium">{video.video_title}</h3>
                  <p className="text-sm text-muted-foreground">{video.is_published ? '✓ Published' : '○ Draft'}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(video)}><Edit className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(video.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
