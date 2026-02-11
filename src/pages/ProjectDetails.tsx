import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Figma } from 'lucide-react';

// Static placeholder data - replace with your own or fetch from your custom backend
interface Project {
  id: string;
  name: string;
  description: string | null;
  tech_stack: string[] | null;
  tags: string[] | null;
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  figma_url: string | null;
  is_featured: boolean | null;
}

const projects: Project[] = [];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id) || null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button asChild>
          <Link to="/works">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Works
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/works" 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        {project.image_url && (
          <div className="mb-8 rounded-lg overflow-hidden border border-border">
            <img 
              src={project.image_url} 
              alt={project.name}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {project.is_featured && (
                <Badge variant="default" className="bg-primary">Featured</Badge>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary neon-glow">#</span> {project.name}
            </h1>
          </div>

          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="border border-border">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {project.live_url && (
              <Button asChild className="gap-2">
                <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github_url && (
              <Button variant="outline" asChild className="gap-2">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.figma_url && (
              <Button variant="outline" asChild className="gap-2">
                <a href={project.figma_url} target="_blank" rel="noopener noreferrer">
                  <Figma className="h-4 w-4" />
                  Figma
                </a>
              </Button>
            )}
          </div>

          {project.description && (
            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-bold mb-4">About this project</h2>
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="border-t border-border pt-6">
              <h3 className="text-sm text-muted-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
