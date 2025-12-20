import { Moon, Sun, Sparkles, Droplets, Leaf, Heart } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4" />;
      case "yellow":
        return <Sparkles className="w-4 h-4" />;
      case "blue":
        return <Droplets className="w-4 h-4" />;
      case "green":
        return <Leaf className="w-4 h-4" />;
      case "pink":
        return <Heart className="w-4 h-4" />;
      default:
        return <Moon className="w-4 h-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border z-50">
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer ${theme === "dark" ? "text-primary" : ""}`}
        >
          <Moon className="w-4 h-4 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer ${theme === "light" ? "text-primary" : ""}`}
        >
          <Sun className="w-4 h-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("yellow")}
          className={`cursor-pointer ${theme === "yellow" ? "text-primary" : ""}`}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Yellow
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("blue")}
          className={`cursor-pointer ${theme === "blue" ? "text-primary" : ""}`}
        >
          <Droplets className="w-4 h-4 mr-2" />
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("green")}
          className={`cursor-pointer ${theme === "green" ? "text-primary" : ""}`}
        >
          <Leaf className="w-4 h-4 mr-2" />
          Green
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("pink")}
          className={`cursor-pointer ${theme === "pink" ? "text-primary" : ""}`}
        >
          <Heart className="w-4 h-4 mr-2" />
          Pink
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
