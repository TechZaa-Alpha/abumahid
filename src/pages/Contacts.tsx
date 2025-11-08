import { Card } from "@/components/ui/card";
import { MessageSquare, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">/</span>contacts
          </h1>
          <p className="text-muted-foreground">Let's get in touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-muted-foreground">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate
              to contact me
            </p>

            <div className="dot-pattern w-32 h-32 opacity-30" />
          </div>

          <Card className="p-8 border-2 border-border bg-card hover:border-primary transition-all animate-slide-in-right">
            <h2 className="text-xl font-bold mb-6">Message me here</h2>
            <div className="space-y-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>!Elias#3519</span>
              </a>
              <a
                href="mailto:elias@elias.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>elias@elias.me</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
