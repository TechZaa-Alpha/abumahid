import { Card } from "@/components/ui/card";
import { MessageSquare, Mail, Github, Linkedin, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contacts = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary neon-text-pulse">/</span>contacts
          </h1>
          <p className="text-muted-foreground">Let's get in touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <p className="text-muted-foreground text-lg">
              I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate
              to contact me using the form or through my social links.
            </p>

            <Card className="p-6 border-2 border-border bg-card hover-neon-glow transition-all duration-300">
              <h2 className="text-xl font-bold mb-6 text-primary neon-glow">Quick Contact</h2>
              <div className="space-y-4">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>!Elias#3519</span>
                </a>
                <a
                  href="mailto:elias@elias.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>elias@elias.me</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/elias</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/elias</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border bg-card hover-neon-glow transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-primary neon-glow">Location</h2>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kyiv, Ukraine</span>
              </div>
            </Card>

            <div className="relative">
              <div className="dot-pattern w-32 h-32 opacity-30 animate-float" />
              <div className="absolute top-8 left-16 dot-pattern w-24 h-24 opacity-20" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-slide-in-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
