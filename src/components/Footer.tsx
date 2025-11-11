import { Github, Figma, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 border-2 border-foreground" />
              <span className="font-bold text-foreground">Elias</span>
              <span className="text-muted-foreground ml-2">elias@elias-dev.ml</span>
            </div>
            <p className="text-sm text-muted-foreground">Web designer and front-end developer</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-foreground">Media</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Figma"
              >
                <Figma className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">© Copyright 2022. Made by Elias</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
