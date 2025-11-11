import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import heroPersonImg from "@/assets/hero-person.png";
import chertnodesImg from "@/assets/chertnodes.png";
import protectxImg from "@/assets/protectx.png";
import kahootImg from "@/assets/kahoot.png";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Elias is a <span className="text-primary neon-glow">web designer</span> and{" "}
                <span className="text-primary neon-glow">front-end developer</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                He crafts responsive websites where technologies meet creativity
              </p>
            </div>
            <Button asChild size="lg" className="border-2">
              <Link to="/contacts">Contact me !!</Link>
            </Button>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img src={heroPersonImg} alt="Developer" className="w-full h-auto relative z-10" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-max">
                <div className="border-2 border-primary px-6 py-3 bg-background/95 backdrop-blur-sm inline-flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground whitespace-nowrap">Currently working on</p>
                    <p className="font-bold text-foreground">Portfolio</p>
                  </div>
                </div>
              </div>
              {/* Decorative squares */}
              <div className="absolute bottom-16 left-8 w-20 h-20 border-2 border-primary/40" />
              <div className="absolute bottom-8 left-16 w-16 h-16 border-2 border-primary/60" />
              <div className="absolute bottom-0 left-24 w-12 h-12 border-2 border-primary/80" />
            </div>
            {/* Dot pattern */}
            <div className="absolute top-0 right-0 w-40 h-64 dot-pattern" />
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-32">
          <div className="border-2 border-border px-8 py-6 max-w-3xl relative">
            <div className="absolute -top-3 -left-3 text-5xl text-border">"</div>
            <blockquote className="text-xl font-medium mb-4 text-foreground">
              With great power comes great electricity bill
            </blockquote>
            <div className="absolute -bottom-3 -right-3 text-5xl text-border">"</div>
            <cite className="text-muted-foreground text-right block">- Dr. Who</cite>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-primary">#</span>projects
            </h2>
            <Link to="/works" className="text-foreground hover:text-primary transition-colors underline">
              View all ~~&gt;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-border bg-card overflow-hidden group hover:border-primary transition-all">
              <div className="h-48 overflow-hidden">
                <img src={chertnodesImg} alt="ChertNodes" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t-2 border-border">
                <div className="text-xs text-muted-foreground mb-3 flex flex-wrap gap-2">
                  <span className="border border-border px-2 py-1">HTML</span>
                  <span className="border border-border px-2 py-1">SCSS</span>
                  <span className="border border-border px-2 py-1">Python</span>
                  <span className="border border-border px-2 py-1">Flask</span>
                </div>
                <h3 className="font-bold mb-2">ChertNodes</h3>
                <p className="text-sm text-muted-foreground mb-4">Minecraft servers hosting</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-2">
                    Live &lt;~&gt;
                  </Button>
                  <Button size="sm" variant="outline" className="border-2">
                    Cached &gt;=
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-border bg-card overflow-hidden group hover:border-primary transition-all">
              <div className="h-48 overflow-hidden">
                <img src={protectxImg} alt="ProtectX" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t-2 border-border">
                <div className="text-xs text-muted-foreground mb-3 flex flex-wrap gap-2">
                  <span className="border border-border px-2 py-1">React</span>
                  <span className="border border-border px-2 py-1">Express</span>
                  <span className="border border-border px-2 py-1">Discord.js</span>
                  <span className="border border-border px-2 py-1">Node.js</span>
                </div>
                <h3 className="font-bold mb-2">ProtectX</h3>
                <p className="text-sm text-muted-foreground mb-4">Discord anti-crash bot</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-2">
                    Live &lt;~&gt;
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-border bg-card overflow-hidden group hover:border-primary transition-all">
              <div className="h-48 overflow-hidden bg-primary/20 flex items-center justify-center">
                <img src={kahootImg} alt="Kahoot Answers" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t-2 border-border">
                <div className="text-xs text-muted-foreground mb-3 flex flex-wrap gap-2">
                  <span className="border border-border px-2 py-1">CSS</span>
                  <span className="border border-border px-2 py-1">Express</span>
                  <span className="border border-border px-2 py-1">Node.js</span>
                </div>
                <h3 className="font-bold mb-2">Kahoot Answers Viewer</h3>
                <p className="text-sm text-muted-foreground mb-4">Get answers to your kahoot quiz</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-2">
                    Live &lt;~&gt;
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-primary">#</span>skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="w-52 h-52 border-2 border-primary/30" />
                <div className="absolute -bottom-12 -right-12 w-40 h-40 border-2 border-primary/20" />
                <div className="absolute top-1/4 -left-12 dot-pattern w-24 h-24 opacity-50" />
                <div className="absolute bottom-0 right-1/4 dot-pattern w-20 h-20 opacity-30" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3 text-foreground border-b border-border pb-2">Languages</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>TypeScript Lua</div>
                  <div>Python JavaScript</div>
                </div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3 text-foreground border-b border-border pb-2">Databases</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>SQLite PostgreSQL</div>
                  <div>Mongo</div>
                </div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3 text-foreground border-b border-border pb-2">Other</h3>
                <div className="text-sm text-muted-foreground">HTML CSS EJS SCSS REST Jinja</div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card">
                <h3 className="font-bold mb-3 text-foreground border-b border-border pb-2">Tools</h3>
                <div className="text-sm text-muted-foreground">VSCode Neovim Linux Figma XFCE Arch</div>
              </Card>
              <Card className="p-4 border-2 border-border hover:border-primary transition-all bg-card col-span-2">
                <h3 className="font-bold mb-3 text-foreground border-b border-border pb-2">Frameworks</h3>
                <div className="text-sm text-muted-foreground">
                  React Vue Disnake Discord.js Flask Express.js
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-primary">#</span>about-me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground">
              <p>Hello, I'm Elias!</p>
              <p>
                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences.
              </p>
              <p>
                Transforming my creativity and knowledge into websites has been my passion for over a year. I have been
                helping various clients to establish their presence online. I always strive to learn about the newest
                technologies and frameworks.
              </p>
              <Button asChild className="mt-4 border-2">
                <Link to="/about">Read more -&gt;</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 dot-pattern w-48 h-64" />
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/5 to-transparent border-2 border-border" />
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-primary">#</span>contacts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground">
              <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</p>
            </div>
            <Card className="p-6 border-2 border-border bg-card">
              <h3 className="font-bold mb-4 text-foreground">Message me here</h3>
              <div className="space-y-3">
                <a
                  href="https://discord.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>!Elias#3519</span>
                </a>
                <a
                  href="mailto:elias@elias-dev.ml"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>elias@elias-dev.ml</span>
                </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
