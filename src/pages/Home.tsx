import heroPersonImg from "@/assets/photo.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetProjectsQuery } from "@/redux/features/project.api";
import { Project } from "@/types";
import {
  ArrowRight,
  CloudDownload,
  Coffee,
  ExternalLink,
  Gamepad2,
  Github,
  MessageSquare,
  Music,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useGetProjectsQuery({ isFeatured: true });
  if (isLoading) return;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex justify-between flex-col md:flex-row gap-12 items-center ">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
              Abumahid is a{" "}
              <span className="text-primary neon-text-pulse">
                full-stack developer
              </span>{" "}
              and{" "}
              <span className="text-primary neon-text-pulse">
                Problem Solver
              </span>
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in-delay-1 ">
              I develop high-performance web applications with a strong backend
              foundation—turning complex problems into scalable, elegant
              solutions through code.
            </p>
            <div className="animate-fade-in-delay-2 space-x-5">
              <Link to="/contacts">
                <Button className="neon-pulse bg-transparent border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-primary">
                  Contact me !!
                </Button>
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1wg91ZcwoLM52rCABiuKugIN_r9C8pDOv"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-transparent border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-primary">
                  Download <CloudDownload />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-30 animate-float" />
            <div className="absolute bottom-8 right-8 w-48 h-48 dot-pattern opacity-30" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-pulse overflow-hidden transition-all duration-500 hover:border-primary">
                  <img
                    src={heroPersonImg}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                  <Star
                    fill="currentColor"
                    className="absolute top-4 right-4 w-12 h-12 text-primary rotate-12 drop-shadow-[0_0_12px_hsl(var(--primary))]"
                  />
                  <Star
                    fill="currentColor"
                    className="absolute top-1/2 left-4 w-6 h-6 text-primary -rotate-12 drop-shadow-[0_0_10px_hsl(var(--primary))]"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max">
                  <div className="bg-card border border-primary/50 px-6 py-3 flex items-center gap-2 neon-border">
                    <div className="w-3 h-3 bg-primary rounded-sm animate-glow" />
                    <span className="text-sm">
                      Currently working on{" "}
                      <span className="font-bold text-primary neon-glow">
                        Portfolio
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-3xl mx-auto border-2 border-border p-8 relative hover-neon-glow transition-all duration-500">
          <div className="absolute -top-4 left-8 bg-background px-2 text-2xl text-primary neon-glow">
            "
          </div>
          <p className="text-xl text-center mb-4">
            “Surely, with every hardship comes ease. So remain patient and place
            your trust in Allah”
          </p>
          <div className="absolute -bottom-4 right-8 bg-background px-2 text-2xl text-primary neon-glow">
            "
          </div>
          <p className="text-right text-muted-foreground mt-6">
            — The Qur’an (Surah Al-Inshirah - 94:6)
          </p>
        </div>
      </section>

      {/* Projects Preview */}
      <section
        id="projects"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-primary neon-text-pulse">#</span>projects
          </h2>
          <Link
            to="/works"
            className="text-sm hover:text-primary transition-colors flex items-center gap-2 group"
          >
            View all{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {data?.data?.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No projects yet. Add some from your backend!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {data?.data?.map((project: Project) => (
              <Link to={`/project/${project?._id}`} key={project?._id}>
                <Card className="group border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden bg-card hover-neon-glow h-full">
                  {project?.image_url && (
                    <div className="h-48 overflow-hidden bg-muted">
                      <img
                        src={project?.image_url}
                        alt={project?.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    {project?.tech_stack && project?.tech_stack.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        {project?.tech_stack.join(" ")}
                      </div>
                    )}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project?.name}
                    </h3>
                    {project?.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project?.description
                          .replace(/<[^>]*>/g, "")
                          .slice(0, 80)}
                        ...
                      </p>
                    )}
                    <div className="flex gap-2 flex-wrap">
                      {project?.live_url && (
                        <Badge
                          variant="outline"
                          className="border-primary text-primary"
                        >
                          Live <ExternalLink className="w-3 h-3 ml-1" />
                        </Badge>
                      )}
                      {project?.github_url && (
                        <Badge
                          variant="outline"
                          className="border-primary text-primary"
                        >
                          GitHub <Github className="w-3 h-3 ml-1" />
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="relative h-full flex items-center justify-center lg:justify-start">
            <div className="dot-pattern w-32 h-32 opacity-30 absolute top-0 left-0 animate-float" />
            <div className="dot-pattern w-24 h-24 opacity-20 absolute bottom-12 right-8" />
            <div className="space-y-6 relative z-10">
              <div className="w-64 h-64 border-2 border-primary/30 relative neon-pulse">
                <div
                  className="absolute -bottom-16 -left-16 w-48 h-48 border-2 border-primary/20 animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-28 h-28 text-primary neon-text-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">Languages</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>TypeScript JavaScript Python</div>
                  <div>C Java</div>
                </div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">Databases</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>MongoDb PostgreSQL Supabase</div>
                  <div>Prisma(ORM) Mongoose(ODM)</div>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">Tools</h3>
                <div className="text-sm text-muted-foreground">
                  VSCode Git Linux Figma Postman Docker Swagger
                </div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">Other</h3>
                <div className="text-sm text-muted-foreground">
                  HTML CSS EJS SCSS REST TailwindCSS
                </div>
              </Card>
            </div>
            <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
              <h3 className="font-bold mb-3">Frameworks</h3>
              <div className="text-sm text-muted-foreground">
                Node.js Express.js Nest.js React.js Next.js
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section
        id="fun-facts"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>fun-facts
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Gamer</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              I love playing video games, especially RPGs and indie games
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Music Lover</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Electronic and lo-fi beats keep me focused while coding
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Coffee Addict</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Can't start my day without a strong cup of coffee
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Night Owl</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Best ideas come to me late at night when the world is quiet
            </p>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section
        id="about"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>about-me
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-6 animate-fade-in lg:col-span-2">
            <p className="text-muted-foreground">Hello, I'm Abumahid</p>
            <p className="text-muted-foreground">
              A dedicated and enthusiastic Full-Stack Developer based in
              Rangpur, Bangladesh. I specialize in building fast, clean, and
              scalable web applications using modern tools like TypeScript,
              Next.js, React.js, Node.js, Express.js,Nest.js, MongoDB, and
              PostgreSQL.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in HTML, CSS, and responsive UI
              frameworks like Tailwind CSS, Shadcn UI, Bootstrap, and Ant
              Design, I bring user interfaces to life that are both visually
              appealing and functionally robust. I'm passionate about creating
              seamless user experiences that are accessible, modern, and
              performance driven.
            </p>
            <Link to="/about">
              <Button className="bg-transparent border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-primary mt-4">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative h-full flex items-center justify-center lg:justify-end">
            <div className="dot-pattern w-32 h-32 opacity-30 absolute top-0 left-0 animate-float" />
            <div className="dot-pattern w-24 h-24 opacity-20 absolute bottom-12 right-8" />
            <div className="space-y-6 relative z-10">
              <div className="w-64 h-64 border-2 border-primary/30 relative neon-pulse">
                <div
                  className="absolute -bottom-16 -left-16 w-48 h-48 border-2 border-primary/20 animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <UserRound className="w-28 h-28 text-primary neon-text-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>contacts
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <p className="text-muted-foreground">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>

          <Card className="p-6 border-2 border-border bg-card hover-neon-glow transition-all duration-300">
            <h3 className="font-bold mb-4 text-primary neon-glow">
              Message me here
            </h3>
            <div className="space-y-3">
              <a
                href="https://discord.com/abumahid"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                <MessageSquare className="w-4 h-4" /> abumahid
              </a>
              <a
                href="mailto:dev.abumahid@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                <Github className="w-4 h-4" /> dev.abumahid@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
