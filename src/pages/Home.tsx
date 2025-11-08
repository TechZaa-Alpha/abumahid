import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, MessageSquare } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Elias is a <span className="text-primary neon-glow">web designer</span> and{" "}
              <span className="text-primary neon-glow">front-end developer</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button className="neon-border bg-transparent border-2 border-primary hover:bg-primary/10">
              Contact me !!
            </Button>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-30" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-border flex items-center justify-center">
                <div className="text-6xl">👤</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
              <div className="bg-card border border-border px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-sm animate-glow" />
                <span className="text-sm">Currently working on <span className="font-bold text-primary">Portfolio</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto border-2 border-border p-8 relative">
          <div className="absolute -top-4 left-8 bg-background px-2 text-2xl text-primary">"</div>
          <p className="text-xl text-center mb-4">With great power comes great electricity bill</p>
          <div className="absolute -bottom-4 right-8 bg-background px-2 text-2xl text-primary">"</div>
          <p className="text-right text-muted-foreground mt-6">- Dr. Who</p>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-primary">#</span>projects
          </h2>
          <Link to="/works" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "ChertNodes",
              tech: "HTML SCSS Python Flask",
              desc: "Minecraft servers hosting",
              tags: ["Live", "Cached"],
            },
            {
              name: "ProtectX",
              tech: "React Express Discord.js Node.JS",
              desc: "Discord anti-crash bot",
              tags: ["Live"],
            },
            {
              name: "Kahoot Answers Viewer",
              tech: "CSS Express Node.JS",
              desc: "Get answers to your kahoot quiz",
              tags: ["Live"],
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary transition-all overflow-hidden bg-card hover:neon-border"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-4xl">
                💻
              </div>
              <div className="p-6 space-y-4">
                <div className="text-xs text-muted-foreground">{project.tech}</div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <div className="flex gap-4">
                  {project.tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10"
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary">#</span>skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="dot-pattern w-32 h-32 opacity-30 absolute top-0 left-0" />
            <div className="space-y-6 relative z-10">
              <div className="w-48 h-48 border-2 border-primary/30 ml-16 relative">
                <div className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-primary/20" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Languages", items: ["TypeScript", "Lua", "Python", "JavaScript"] },
              { title: "Databases", items: ["SQLite", "PostgreSQL", "Mongo"] },
              { title: "Tools", items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch"] },
              { title: "Other", items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"] },
              { title: "Frameworks", items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"] },
            ].map((category, index) => (
              <Card key={index} className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">{category.title}</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  {category.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary">#</span>about-me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 dot-pattern w-32 h-32 opacity-30" />
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-border flex items-center justify-center">
              <div className="text-8xl">👤</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary">#</span>contacts
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <p className="text-muted-foreground">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate
            to contact me
          </p>

          <Card className="p-6 border-2 border-border bg-card">
            <h3 className="font-bold mb-4">Message me here</h3>
            <div className="space-y-3">
              <a
                href="https://discord.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> !Elias#3519
              </a>
              <a
                href="mailto:elias@elias.me"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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
