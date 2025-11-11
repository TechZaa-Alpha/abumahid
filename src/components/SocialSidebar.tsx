import { Github, Dribbble, Figma } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-30 hidden lg:flex flex-col justify-between border-r-2 border-border w-12 bg-sidebar">
      <div className="pt-6 px-3">
        <div className="text-muted-foreground text-sm" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Home
        </div>
      </div>
      
      <div className="flex flex-col gap-2 pb-6 px-3 border-t-2 border-border pt-2">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110 flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Dribbble"
        >
          <Dribbble className="w-6 h-6" />
        </a>
        <a
          href="https://figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Figma"
        >
          <Figma className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
