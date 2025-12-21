import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X, GripVertical } from 'lucide-react';
import type { Tables } from '@/integrations/supabase/types';

type Skill = Tables<'skills'>;

export const AdminSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Partial<Skill> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category')
      .order('display_order');

    if (error) {
      toast({ title: 'Error fetching skills', description: error.message, variant: 'destructive' });
    } else {
      setSkills(data || []);
    }
    setIsLoading(false);
  };

  const handleNew = () => {
    setEditingSkill({
      name: '',
      category: '',
      icon: '',
      proficiency: 80,
      display_order: skills.length,
    });
    setIsEditing(true);
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editingSkill?.name || !editingSkill?.category) {
      toast({ title: 'Name and category are required', variant: 'destructive' });
      return;
    }

    const skillData = {
      name: editingSkill.name,
      category: editingSkill.category,
      icon: editingSkill.icon || null,
      proficiency: editingSkill.proficiency || 80,
      display_order: editingSkill.display_order || 0,
    };

    if (editingSkill.id) {
      const { error } = await supabase
        .from('skills')
        .update(skillData)
        .eq('id', editingSkill.id);

      if (error) {
        toast({ title: 'Error updating skill', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Skill updated successfully' });
    } else {
      const { error } = await supabase.from('skills').insert(skillData);

      if (error) {
        toast({ title: 'Error creating skill', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Skill created successfully' });
    }

    setIsEditing(false);
    setEditingSkill(null);
    fetchSkills();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;

    const { error } = await supabase.from('skills').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error deleting skill', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Skill deleted successfully' });
      fetchSkills();
    }
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  if (isEditing && editingSkill) {
    return (
      <Card className="border-border">
        <CardHeader>
          <CardTitle>{editingSkill.id ? 'Edit Skill' : 'New Skill'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Skill Name</Label>
              <Input
                id="name"
                value={editingSkill.name || ''}
                onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                placeholder="React, TypeScript, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={editingSkill.category || ''}
                onChange={(e) => setEditingSkill({ ...editingSkill, category: e.target.value })}
                placeholder="Languages, Frameworks, Tools, etc."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon">Icon (optional)</Label>
              <Input
                id="icon"
                value={editingSkill.icon || ''}
                onChange={(e) => setEditingSkill({ ...editingSkill, icon: e.target.value })}
                placeholder="Icon name or URL"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="proficiency">Proficiency (%)</Label>
              <Input
                id="proficiency"
                type="number"
                min="0"
                max="100"
                value={editingSkill.proficiency || 80}
                onChange={(e) => setEditingSkill({ ...editingSkill, proficiency: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" onClick={() => { setIsEditing(false); setEditingSkill(null); }} className="gap-2">
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
        <CardTitle>Skills</CardTitle>
        <Button onClick={handleNew} className="gap-2">
          <Plus className="h-4 w-4" />
          New Skill
        </Button>
      </CardHeader>
      <CardContent>
        {skills.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No skills yet. Add your first one!</p>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="font-bold text-primary mb-3">{category}</h3>
                <div className="space-y-2">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">({skill.proficiency}%)</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(skill)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDelete(skill.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
