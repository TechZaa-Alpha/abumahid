import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X, GraduationCap } from 'lucide-react';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string | null;
  start_date: string;
  end_date: string | null;
  description: string | null;
  display_order: number | null;
  created_at: string;
  updated_at: string;
}

export const AdminEducation = () => {
  const [items, setItems] = useState<Education[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editing, setEditing] = useState<Partial<Education> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else setItems((data as Education[]) || []);
    setIsLoading(false);
  };

  const handleNew = () => {
    setEditing({ institution: '', degree: '', field_of_study: '', start_date: '', end_date: '', description: '', display_order: 0 });
    setIsEditing(true);
  };

  const handleEdit = (item: Education) => { setEditing(item); setIsEditing(true); };

  const handleSave = async () => {
    if (!editing?.institution || !editing?.degree || !editing?.start_date) {
      toast({ title: 'Institution, degree and start date are required', variant: 'destructive' });
      return;
    }
    const payload = {
      institution: editing.institution,
      degree: editing.degree,
      field_of_study: editing.field_of_study || null,
      start_date: editing.start_date,
      end_date: editing.end_date || null,
      description: editing.description || null,
      display_order: editing.display_order || 0,
    };

    if (editing.id) {
      const { error } = await supabase.from('education').update(payload).eq('id', editing.id);
      if (error) { toast({ title: 'Error', description: error.message, variant: 'destructive' }); return; }
      toast({ title: 'Education updated' });
    } else {
      const { error } = await supabase.from('education').insert(payload);
      if (error) { toast({ title: 'Error', description: error.message, variant: 'destructive' }); return; }
      toast({ title: 'Education added' });
    }
    setIsEditing(false); setEditing(null); fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this education entry?')) return;
    const { error } = await supabase.from('education').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted' }); fetchItems(); }
  };

  if (isLoading) return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>;

  if (isEditing && editing) {
    return (
      <Card className="border-border">
        <CardHeader><CardTitle>{editing.id ? 'Edit Education' : 'New Education'}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Institution *</Label>
              <Input value={editing.institution || ''} onChange={(e) => setEditing({ ...editing, institution: e.target.value })} placeholder="University name" />
            </div>
            <div className="space-y-2">
              <Label>Degree *</Label>
              <Input value={editing.degree || ''} onChange={(e) => setEditing({ ...editing, degree: e.target.value })} placeholder="Bachelor's, Master's, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Field of Study</Label>
            <Input value={editing.field_of_study || ''} onChange={(e) => setEditing({ ...editing, field_of_study: e.target.value })} placeholder="Computer Science" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date *</Label>
              <Input value={editing.start_date || ''} onChange={(e) => setEditing({ ...editing, start_date: e.target.value })} placeholder="2020" />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input value={editing.end_date || ''} onChange={(e) => setEditing({ ...editing, end_date: e.target.value })} placeholder="2024 or Present" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={editing.description || ''} onChange={(e) => setEditing({ ...editing, description: e.target.value })} placeholder="Additional details..." />
          </div>
          <div className="space-y-2">
            <Label>Display Order</Label>
            <Input type="number" value={editing.display_order || 0} onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" />Save</Button>
            <Button variant="outline" onClick={() => { setIsEditing(false); setEditing(null); }} className="gap-2"><X className="h-4 w-4" />Cancel</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Education</CardTitle>
        <Button onClick={handleNew} className="gap-2"><Plus className="h-4 w-4" />Add Education</Button>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No education entries yet.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{item.degree} — {item.institution}</h3>
                    <p className="text-sm text-muted-foreground">{item.start_date} – {item.end_date || 'Present'}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(item)}><Edit className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
