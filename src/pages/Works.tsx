import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Figma } from "lucide-react";
import type { Tables } from '@/integrations/supabase/types';

type Project = Tables<'projects'>;

const Works = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('is_published', true)
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false });

    setProjects(data || []);
    setIsLoading(false);
  };

  const featuredProjects = projects.filter(p => p.is_featured);
  const regularProjects = projects.filter(p => !p.is_featured);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <Link to={`/project/${project.id}`}>
      <Card
        className="group border-2 border-border hover:border-primary transition-all overflow-hidden bg-card hover:neon-border animate-fade-in cursor-pointer h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {project.image_url && (
          <div className="h-48 overflow-hidden bg-muted">
            <img 
              src={project.image_url} 
              alt={project.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        )}
        <div className="p-6 space-y-4">
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.tech_stack.slice(0, 4).map((tech) => (
                <span key={tech} className="text-xs text-muted-foreground">{tech}</span>
              ))}
            </div>
          )}
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description.replace(/<[^>]*>/g, '').slice(0, 100)}...
            </p>
          )}
          <div className="flex gap-2 flex-wrap">
            {project.live_url && (
              <Badge variant="outline" className="border-primary text-primary">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Badge>
            )}
            {project.github_url && (
              <Badge variant="outline" className="border-primary text-primary">
                <Github className="w-3 h-3 mr-1" />
                GitHub
              </Badge>
            )}
            {project.figma_url && (
              <Badge variant="outline" className="border-primary text-primary">
                <Figma className="w-3 h-3 mr-1" />
                Figma
              </Badge>
            )}
            {project.is_featured && (
              <Badge className="bg-primary">Featured</Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">/</span>projects
          </h1>
          <p className="text-muted-foreground">List of my projects</p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="text-primary">#</span>featured-projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </section>
            )}

            {regularProjects.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">
                  <span className="text-primary">#</span>all-projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Works;
