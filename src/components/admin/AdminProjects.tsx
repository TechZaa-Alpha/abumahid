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

type Project = Tables<'projects'>;

export const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error fetching projects', description: error.message, variant: 'destructive' });
    } else {
      setProjects(data || []);
    }
    setIsLoading(false);
  };

  const handleNew = () => {
    setEditingProject({
      name: '',
      description: '',
      tech_stack: [],
      tags: [],
      image_url: '',
      live_url: '',
      github_url: '',
      figma_url: '',
      is_published: true,
      is_featured: false,
    });
    setIsEditing(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editingProject?.name) {
      toast({ title: 'Project name is required', variant: 'destructive' });
      return;
    }

    const projectData = {
      name: editingProject.name,
      description: editingProject.description || null,
      tech_stack: editingProject.tech_stack || [],
      tags: editingProject.tags || [],
      image_url: editingProject.image_url || null,
      live_url: editingProject.live_url || null,
      github_url: editingProject.github_url || null,
      figma_url: editingProject.figma_url || null,
      is_published: editingProject.is_published ?? true,
      is_featured: editingProject.is_featured ?? false,
    };

    if (editingProject.id) {
      const { error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', editingProject.id);

      if (error) {
        toast({ title: 'Error updating project', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Project updated successfully' });
    } else {
      const { error } = await supabase.from('projects').insert(projectData);

      if (error) {
        toast({ title: 'Error creating project', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Project created successfully' });
    }

    setIsEditing(false);
    setEditingProject(null);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const { error } = await supabase.from('projects').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error deleting project', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Project deleted successfully' });
      fetchProjects();
    }
  };

  const handleArrayChange = (field: 'tech_stack' | 'tags', value: string) => {
    const items = value.split(',').map(item => item.trim()).filter(Boolean);
    setEditingProject(prev => prev ? { ...prev, [field]: items } : null);
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  if (isEditing && editingProject) {
    return (
      <Card className="border-border">
        <CardHeader>
          <CardTitle>{editingProject.id ? 'Edit Project' : 'New Project'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={editingProject.name || ''}
              onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
              placeholder="Project name"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <RichTextEditor
              content={editingProject.description || ''}
              onChange={(content) => setEditingProject({ ...editingProject, description: content })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tech_stack">Tech Stack (comma-separated)</Label>
              <Input
                id="tech_stack"
                value={editingProject.tech_stack?.join(', ') || ''}
                onChange={(e) => handleArrayChange('tech_stack', e.target.value)}
                placeholder="React, TypeScript, Tailwind"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={editingProject.tags?.join(', ') || ''}
                onChange={(e) => handleArrayChange('tags', e.target.value)}
                placeholder="web, mobile, api"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input
              id="image_url"
              value={editingProject.image_url || ''}
              onChange={(e) => setEditingProject({ ...editingProject, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="live_url">Live URL</Label>
              <Input
                id="live_url"
                value={editingProject.live_url || ''}
                onChange={(e) => setEditingProject({ ...editingProject, live_url: e.target.value })}
                placeholder="https://project.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                id="github_url"
                value={editingProject.github_url || ''}
                onChange={(e) => setEditingProject({ ...editingProject, github_url: e.target.value })}
                placeholder="https://github.com/..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="figma_url">Figma URL</Label>
              <Input
                id="figma_url"
                value={editingProject.figma_url || ''}
                onChange={(e) => setEditingProject({ ...editingProject, figma_url: e.target.value })}
                placeholder="https://figma.com/..."
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="is_published"
                checked={editingProject.is_published ?? true}
                onCheckedChange={(checked) => setEditingProject({ ...editingProject, is_published: checked })}
              />
              <Label htmlFor="is_published">Published</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_featured"
                checked={editingProject.is_featured ?? false}
                onCheckedChange={(checked) => setEditingProject({ ...editingProject, is_featured: checked })}
              />
              <Label htmlFor="is_featured">Featured</Label>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" onClick={() => { setIsEditing(false); setEditingProject(null); }} className="gap-2">
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
        <CardTitle>Projects</CardTitle>
        <Button onClick={handleNew} className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </CardHeader>
      <CardContent>
        {projects.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No projects yet. Create your first one!</p>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.is_published ? '✓ Published' : '○ Draft'}
                    {project.is_featured && ' • ⭐ Featured'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(project.id)}>
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
