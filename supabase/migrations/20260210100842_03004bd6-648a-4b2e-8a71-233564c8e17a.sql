
-- Add thumbnail_url to videos table
ALTER TABLE public.videos ADD COLUMN thumbnail_url text;

-- Create education table
CREATE TABLE public.education (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institution text NOT NULL,
  degree text NOT NULL,
  field_of_study text,
  start_date text NOT NULL,
  end_date text,
  description text,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view education" ON public.education FOR SELECT USING (true);
CREATE POLICY "Admins can manage education" ON public.education FOR ALL USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON public.education FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
