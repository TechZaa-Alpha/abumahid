import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Works = () => {
  const completeApps = [
    {
      name: "ChertNodes",
      tech: "HTML SCSS Python Flask",
      desc: "Minecraft servers hosting",
      tags: [
        { label: "Live", icon: ExternalLink },
        { label: "Cached", icon: null },
      ],
    },
    {
      name: "Kahoot Answers Viewer",
      tech: "CSS Express Node.JS",
      desc: "Get answers to your kahoot quiz",
      tags: [{ label: "Live", icon: ExternalLink }],
    },
    {
      name: "ProtectX",
      tech: "React Express Discord.js Node.JS",
      desc: "Discord anti-crash bot",
      tags: [{ label: "Cached", icon: null }],
    },
    {
      name: "Kotik Bot",
      tech: "HTML CSS JS",
      desc: "Multi-functional discord bot",
      tags: [{ label: "Live", icon: ExternalLink }],
    },
    {
      name: "Portfolio",
      tech: "Vue TS Less",
      desc: "You're using it rn",
      tags: [{ label: "Github", icon: Github }],
    },
  ];

  const smallProjects = [
    {
      name: "Bot boilerplate",
      tech: "Discord.js TS JS",
      desc: "Start creating scalable discord.js bot with TypeScript and JavaScript",
      tags: [{ label: "Github", icon: Github }],
    },
    {
      name: "My blog",
      tech: "VUE CSS JS",
      desc: "Front-end of my future blog website written on NuxtJS",
      tags: [{ label: "Github", icon: Github }],
    },
    {
      name: "Chess pro",
      tech: "Figma",
      desc: "Figma landing page about service for viewing chess tournaments",
      tags: [{ label: "Figma", icon: ExternalLink }],
    },
    {
      name: "Crash protect website",
      tech: "Figma",
      desc: "Template for website about anti-raid, anti-crash discord bot",
      tags: [{ label: "Figma", icon: ExternalLink }],
    },
    {
      name: "CSS expeirements",
      tech: "HTML CSS",
      desc: "Collection of my different little problems with CSS",
      tags: [{ label: "Live", icon: ExternalLink }],
    },
    {
      name: "Web Dev nvim config",
      tech: "Lua NeoVim",
      desc: "Config for neovim perfect for web developer",
      tags: [{ label: "Github", icon: Github }],
    },
    {
      name: "Ooku",
      tech: "Python Quart HTML",
      desc: "Simple link shortener with auth",
      tags: [{ label: "Live", icon: ExternalLink }],
    },
    {
      name: "School website",
      tech: "Figma",
      desc: "Figma template website for my school",
      tags: [{ label: "Figma", icon: ExternalLink }],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">/</span>projects
          </h1>
          <p className="text-muted-foreground">List of my projects</p>
        </div>

        {/* Complete Apps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-primary">#</span>complete-apps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeApps.map((project, index) => (
              <Card
                key={index}
                className="group border-2 border-border hover:border-primary transition-all overflow-hidden bg-card hover:neon-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-4xl">
                  💻
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-xs text-muted-foreground">{project.tech}</div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <Button
                        key={tagIndex}
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        {tag.label}{" "}
                        {tag.icon && <tag.icon className="w-3 h-3 ml-2" />}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Small Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-primary">#</span>small-projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((project, index) => (
              <Card
                key={index}
                className="group border-2 border-border hover:border-primary transition-all p-6 bg-card hover:neon-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground">{project.tech}</div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <Button
                        key={tagIndex}
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        {tag.label}{" "}
                        {tag.icon && <tag.icon className="w-3 h-3 ml-2" />}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
