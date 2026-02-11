import heroPersonImg from "@/assets/photo.webp";
import EducationCards from "@/components/EducationCards";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

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
            <span className="text-primary neon-text-pulse">/</span>about-me
          </h1>
          <p className="text-muted-foreground">Who am I?</p>
        </div>

        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-muted-foreground">Hello, I'm Abumahid!</p>
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
              appealing and functionally robust. I’m passionate about creating
              seamless user experiences that are accessible, modern, and
              performance driven.
            </p>
            <p className="text-muted-foreground">
              On the backend, I focus on developing secure, maintainable APIs
              and full-featured systems using Express.js, Prisma, and JWT. I’ve
              worked with both MongoDB and PostgreSQL and know how to structure
              data models for real-world use cases. I also enjoy integrating
              tools like Firebase for authentication and hosting, Zod for
              validation, and TanStack Query for efficient data handling.
            </p>
            <p className="text-muted-foreground">
              I love solving complex problems, writing clean and efficient code,
              and constantly learning new technologies. I'm always seeking ways
              to optimize performance, improve UX, and contribute to projects
              that have real impact.
            </p>
            <p className="text-muted-foreground">
              I’m always open to collaborating on exciting tech projects or
              connecting with like-minded professionals. Whether you're hiring,
              building something cool, or just want to chat tech feel free to
              reach out!
            </p>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute top-0 right-0 dot-pattern w-32 h-32 opacity-30" />
            <div className="absolute bottom-0 left-0 dot-pattern w-24 h-24 opacity-20" />
            <div className="relative w-full  bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 neon-border overflow-hidden">
              <img
                src={heroPersonImg}
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            <span className="text-primary">#</span>skills
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
        <EducationCards />
      </div>
    </div>
  );
};

export default About;
