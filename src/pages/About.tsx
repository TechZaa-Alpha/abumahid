import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import heroPersonImg from "@/assets/photo.webp";

// Static placeholder data - replace with your own or fetch from your custom backend
const education: {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string | null;
  start_date: string;
  end_date: string | null;
  description: string | null;
  display_order: number | null;
}[] = [];

const About = () => {
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

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            <span className="text-primary">#</span>education
          </h2>
          {education.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No education entries yet.</p>
          ) : (
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(var(--primary))] transition-all" />
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      {edu.field_of_study && (
                        <p className="text-primary text-sm">{edu.field_of_study}</p>
                      )}
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.start_date} – {edu.end_date || 'Present'}
                      </p>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
