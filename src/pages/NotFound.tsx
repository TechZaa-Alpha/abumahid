import { ArrowLeft, Ghost } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden px-6">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="relative z-10 text-center max-w-xl">
        {/* 404 Big Neon Text */}
        <h1 className="text-8xl font-extrabold bg-clip-text text-primary">
          404
        </h1>

        {/* Icon */}
        <div className="flex justify-center mt-6 mb-4">
          <Ghost className="w-12 h-12 text-primary animate-bounce" />
        </div>

        {/* Message */}
        <p className="text-2xl font-semibold mb-3 text-foreground">
          Oops! Page not found
        </p>

        <p className="text-muted-foreground mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            border-2 border-primary/40
            text-primary
            rounded-lg
            bg-primary/5
            hover:bg-primary/10
            hover:-translate-y-1
            transition-all duration-300
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>

        {/* Path Debug (Optional, remove if you want) */}
        <p className="mt-8 text-xs text-muted-foreground opacity-60">
          Path: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
