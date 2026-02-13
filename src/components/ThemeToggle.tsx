import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import {
  CloudSun,
  Crown,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  Moon,
  MoonStar,
  Sparkles,
  Sun,
  TreePine,
  Waves,
  Zap,
} from "lucide-react";

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
      case "red":
        return <Zap className="w-4 h-4" />;
      case "purple":
        return <Crown className="w-4 h-4" />;
      case "ocean":
        return <Waves className="w-4 h-4" />;
      case "orange":
        return <CloudSun className="w-4 h-4" />;
      case "amoled":
        return <MoonStar className="w-4 h-4" />;
      case "mint":
        return <TreePine className="w-4 h-4" />;
      case "fusion":
        return <FlaskConical className="w-4 h-4" />;
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
        <DropdownMenuItem
          onClick={() => setTheme("red")}
          className={`cursor-pointer ${theme === "red" ? "text-primary" : ""}`}
        >
          <Zap className="w-4 h-4 mr-2" />
          Red
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("purple")}
          className={`cursor-pointer ${theme === "purple" ? "text-primary" : ""}`}
        >
          <Crown className="w-4 h-4 mr-2" />
          Purple
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("ocean")}
          className={`cursor-pointer ${theme === "ocean" ? "text-primary" : ""}`}
        >
          <Waves className="w-4 h-4 mr-2" />
          Ocean
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("orange")}
          className={`cursor-pointer ${theme === "orange" ? "text-primary" : ""}`}
        >
          <CloudSun className="w-4 h-4 mr-2" />
          Orange
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("amoled")}
          className={`cursor-pointer ${theme === "amoled" ? "text-primary" : ""}`}
        >
          <MoonStar className="w-4 h-4 mr-2" />
          Amoled
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("mint")}
          className={`cursor-pointer ${theme === "mint" ? "text-primary" : ""}`}
        >
          <TreePine className="w-4 h-4 mr-2" />
          Mint
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("fusion")}
          className={`cursor-pointer ${theme === "fusion" ? "text-primary" : ""}`}
        >
          <FlaskConical className="w-4 h-4 mr-2" />
          Fusion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
