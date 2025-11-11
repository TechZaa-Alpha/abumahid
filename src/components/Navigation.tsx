import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Code2 className="w-5 h-5" />
            <span className="font-bold">Elias</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-all hover:text-primary ${
                isActive("/") ? "text-primary neon-glow" : "text-muted-foreground"
              }`}
            >
              #home
            </Link>
            <Link
              to="/works"
              className={`text-sm transition-all hover:text-primary ${
                isActive("/works") ? "text-primary neon-glow" : "text-muted-foreground"
              }`}
            >
              #works
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-all hover:text-primary ${
                isActive("/about") ? "text-primary neon-glow" : "text-muted-foreground"
              }`}
            >
              #about-me
            </Link>
            <Link
              to="/contacts"
              className={`text-sm transition-all hover:text-primary ${
                isActive("/contacts") ? "text-primary neon-glow" : "text-muted-foreground"
              }`}
            >
              #contacts
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-6">
            <Link to="/" className={`text-xs ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
              #home
            </Link>
            <Link to="/works" className={`text-xs ${isActive("/works") ? "text-primary" : "text-muted-foreground"}`}>
              #works
            </Link>
            <Link to="/about" className={`text-xs ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}>
              #about-me
            </Link>
            <Link to="/contacts" className={`text-xs ${isActive("/contacts") ? "text-primary" : "text-muted-foreground"}`}>
              #contacts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
