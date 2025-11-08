import { Card } from "@/components/ui/card";
import heroPersonImg from "@/assets/hero-person.png";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "Lua", "Python", "JavaScript"],
    },
    {
      category: "Other",
      items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
    },
    {
      category: "Tools",
      items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome", "KDE", "fish"],
    },
    {
      category: "Databases",
      items: ["SQLite", "PostgreSQL", "Mongo"],
    },
    {
      category: "Frameworks",
      items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
    },
  ];

  const funFacts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "I was in Egypt, Poland and Turkey",
    "My favorite movie is The Green Mile",
    "I am still in school",
    "I don't have any siblings",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">/</span>about-me
          </h1>
          <p className="text-muted-foreground">Who am I?</p>
        </div>

        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6 animate-slide-in-left">
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
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 dot-pattern w-32 h-32 opacity-30" />
            <div className="absolute bottom-0 left-0 dot-pattern w-24 h-24 opacity-20" />
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-border overflow-hidden">
              <img src={heroPersonImg} alt="About me" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            <span className="text-primary">#</span>skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-full flex items-center justify-center">
              <div className="dot-pattern w-32 h-32 opacity-30 absolute top-0 left-0" />
              <div className="dot-pattern w-24 h-24 opacity-20 absolute bottom-12 right-8" />
              <div className="space-y-6 relative z-10">
                <div className="w-56 h-56 border-2 border-primary/30 relative">
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 border-2 border-primary/20" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                  <h3 className="font-bold mb-3">Languages</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>TypeScript Lua</div>
                    <div>Python JavaScript</div>
                  </div>
                </Card>
                <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                  <h3 className="font-bold mb-3">Databases</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>SQLite PostgreSQL</div>
                    <div>Mongo</div>
                  </div>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                  <h3 className="font-bold mb-3">Tools</h3>
                  <div className="text-sm text-muted-foreground">
                    VSCode Neovim Linux Figma XFCE Arch
                  </div>
                </Card>
                <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                  <h3 className="font-bold mb-3">Other</h3>
                  <div className="text-sm text-muted-foreground">
                    HTML CSS EJS SCSS REST Jinja
                  </div>
                </Card>
              </div>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3">Frameworks</h3>
                <div className="text-sm text-muted-foreground">
                  React Vue Disnake Discord.js Flask Express.js
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            <span className="text-primary">#</span>my-fun-facts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-wrap gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="border-2 border-border px-4 py-2 hover:border-primary transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 dot-pattern w-32 h-32 opacity-30" />
              <div className="relative space-y-6">
                <div className="w-64 h-64 border-2 border-primary/30 ml-auto relative">
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 border-2 border-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
