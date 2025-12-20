import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, MessageSquare, Gamepad2, Music, Coffee, Star, Sparkles } from "lucide-react";
import heroPersonImg from "@/assets/hero-person.png";
import chertnodesImg from "@/assets/chertnodes.png";
import protectxImg from "@/assets/protectx.png";
import kahootImg from "@/assets/kahoot.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Elias is a <span className="text-primary neon-text-pulse">web designer</span> and{" "}
              <span className="text-primary neon-text-pulse">front-end developer</span>
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in-delay-1">
              He crafts responsive websites where technologies meet creativity
            </p>
            <div className="animate-fade-in-delay-2">
              <Button className="neon-pulse bg-transparent border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                Contact me !!
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-30 animate-float" />
            <div className="absolute bottom-8 right-8 w-48 h-48 dot-pattern opacity-30" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-pulse overflow-hidden transition-all duration-500 hover:border-primary">
                  <img src={heroPersonImg} alt="Developer" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max">
                  <div className="bg-card border border-primary/50 px-6 py-3 flex items-center gap-2 neon-border">
                    <div className="w-3 h-3 bg-primary rounded-sm animate-glow" />
                    <span className="text-sm">Currently working on <span className="font-bold text-primary neon-glow">Portfolio</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto border-2 border-border p-8 relative hover-neon-glow transition-all duration-500">
          <div className="absolute -top-4 left-8 bg-background px-2 text-2xl text-primary neon-glow">"</div>
          <p className="text-xl text-center mb-4">With great power comes great electricity bill</p>
          <div className="absolute -bottom-4 right-8 bg-background px-2 text-2xl text-primary neon-glow">"</div>
          <p className="text-right text-muted-foreground mt-6">- Dr. Who</p>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-primary neon-text-pulse">#</span>projects
          </h2>
          <Link to="/works" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {[
            {
              name: "ChertNodes",
              tech: "HTML SCSS Python Flask",
              desc: "Minecraft servers hosting",
              tags: ["Live", "Cached"],
              image: chertnodesImg,
            },
            {
              name: "ProtectX",
              tech: "React Express Discord.js Node.JS",
              desc: "Discord anti-crash bot",
              tags: ["Live"],
              image: protectxImg,
            },
            {
              name: "Kahoot Answers Viewer",
              tech: "CSS Express Node.JS",
              desc: "Get answers to your kahoot quiz",
              tags: ["Live"],
              image: kahootImg,
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden bg-card hover-neon-glow"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-4">
                <div className="text-xs text-muted-foreground">{project.tech}</div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <div className="flex gap-4">
                  {project.tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                    >
                      {tag} <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-full flex items-center justify-center">
            <div className="dot-pattern w-32 h-32 opacity-30 absolute top-0 left-0 animate-float" />
            <div className="dot-pattern w-24 h-24 opacity-20 absolute bottom-12 right-8" />
            <div className="space-y-6 relative z-10">
              <div className="w-64 h-64 border-2 border-primary/30 relative neon-pulse">
                <div className="absolute -bottom-16 -left-16 w-48 h-48 border-2 border-primary/20 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-16 h-16 text-primary neon-text-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 stagger-children">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-border hover-neon-glow transition-all duration-300 bg-card">
                <h3 className="font-bold mb-3 text-primary">Languages</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>TypeScript Lua</div>
                  <div>Python JavaScript</div>
                </div>
              </Card>
              <Card className="p-4 border-2 border-border hover-neon-glow transition-all duration-300 bg-card">
                <h3 className="font-bold mb-3 text-primary">Databases</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>SQLite PostgreSQL</div>
                  <div>Mongo</div>
                </div>
              </Card>
            </div>
            <Card className="p-4 border-2 border-border hover-neon-glow transition-all duration-300 bg-card">
              <h3 className="font-bold mb-3 text-primary">Tools</h3>
              <div className="text-sm text-muted-foreground">
                VSCode Neovim Linux Figma XFCE Arch Git Font Awesome KDE fish
              </div>
            </Card>
            <Card className="p-4 border-2 border-border hover-neon-glow transition-all duration-300 bg-card">
              <h3 className="font-bold mb-3 text-primary">Other</h3>
              <div className="text-sm text-muted-foreground">
                HTML CSS EJS SCSS REST Jinja
              </div>
            </Card>
            <Card className="p-4 border-2 border-border hover-neon-glow transition-all duration-300 bg-card">
              <h3 className="font-bold mb-3 text-primary">Frameworks</h3>
              <div className="text-sm text-muted-foreground">
                React Vue Disnake Discord.js Flask Express.js
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="fun-facts" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <p className="text-sm text-muted-foreground">I love playing video games, especially RPGs and indie games</p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Music Lover</h3>
            </div>
            <p className="text-sm text-muted-foreground">Electronic and lo-fi beats keep me focused while coding</p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Coffee Addict</h3>
            </div>
            <p className="text-sm text-muted-foreground">Can't start my day without a strong cup of coffee</p>
          </Card>

          <Card className="p-6 border-2 border-border hover-neon-glow transition-all duration-300 bg-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border border-primary/50 neon-pulse group-hover:neon-border-intense transition-all">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Night Owl</h3>
            </div>
            <p className="text-sm text-muted-foreground">Best ideas come to me late at night when the world is quiet</p>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>about-me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground">Hello, I'm Elias!</p>
            <p className="text-muted-foreground">
              I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
              scratch and raise them into modern user-friendly web experiences.
            </p>
            <p className="text-muted-foreground">
              Transforming my creativity and knowledge into websites has been my passion for over a year. I have been
              helping various clients to establish their presence online. I always strive to learn about the newest
              technologies and frameworks.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 dot-pattern w-32 h-32 opacity-30 animate-float" />
            <div className="absolute bottom-0 left-0 dot-pattern w-24 h-24 opacity-20" />
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-pulse overflow-hidden transition-all duration-500 hover:border-primary">
              <img src={heroPersonImg} alt="About me" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary neon-text-pulse">#</span>contacts
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <p className="text-muted-foreground">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate
            to contact me
          </p>

          <Card className="p-6 border-2 border-border bg-card hover-neon-glow transition-all duration-300">
            <h3 className="font-bold mb-4 text-primary neon-glow">Message me here</h3>
            <div className="space-y-3">
              <a
                href="https://discord.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                <MessageSquare className="w-4 h-4" /> !Elias#3519
              </a>
              <a
                href="mailto:elias@elias.me"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                📧 elias@elias.me
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;