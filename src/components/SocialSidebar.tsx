import {
  AlignEndHorizontal,
  Code,
  GitBranch,
  Github,
  MessageSquare,
} from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4 p-4 bg-sidebar border-r border-border">
        <a
          href="https://github.com/abumahid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://gitlab.com/abumahid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="GitLab"
        >
          <GitBranch className="w-5 h-5" />
        </a>
        <a
          href="https://discord.com/abumahid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="Discord"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a
          href="https://codeforces.com/profile/abumahid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="Codeforces"
        >
          <AlignEndHorizontal className="w-5 h-5" />
        </a>
        <a
          href="https://leetcode.com/u/dev-abumahid/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="LeetCode"
        >
          <Code className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
