import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-4 h-4 border-2 border-foreground" />
            <span className="font-bold text-foreground group-hover:text-primary transition-colors">Elias</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors relative ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary">#</span>home
              {isActive("/") && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <Link
              to="/works"
              className={`text-sm transition-colors relative ${
                isActive("/works") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary">#</span>works
              {isActive("/works") && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors relative ${
                isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary">#</span>about-me
              {isActive("/about") && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <Link
              to="/contacts"
              className={`text-sm transition-colors relative ${
                isActive("/contacts") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary">#</span>contacts
              {isActive("/contacts") && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
            </Link>
            <select className="text-sm bg-transparent border-none text-muted-foreground cursor-pointer">
              <option>EN</option>
              <option>RU</option>
              <option>UA</option>
            </select>
          </div>

          <div className="md:hidden flex items-center gap-4 text-xs">
            <Link to="/" className={isActive("/") ? "text-primary" : "text-muted-foreground"}>
              <span className="text-primary">#</span>home
            </Link>
            <Link to="/works" className={isActive("/works") ? "text-primary" : "text-muted-foreground"}>
              <span className="text-primary">#</span>works
            </Link>
            <Link to="/about" className={isActive("/about") ? "text-primary" : "text-muted-foreground"}>
              <span className="text-primary">#</span>about
            </Link>
            <Link to="/contacts" className={isActive("/contacts") ? "text-primary" : "text-muted-foreground"}>
              <span className="text-primary">#</span>contacts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
