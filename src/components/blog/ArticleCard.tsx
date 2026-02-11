import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ blog }: { blog: Blog }) => {
  const formattedDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link to={`/blog/${blog._id}`}>
      <article className="group relative overflow-hidden rounded-lg border-2 border-border bg-card transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.3),0_20px_40px_-15px_hsl(var(--neon-glow)/0.2)]">
        <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-neon-intense to-primary transition-all duration-700 ease-out" />

        {blog.cover_image_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>
        )}

        <div className="p-5 space-y-3">
          {formattedDate && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </div>
          )}

          <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {blog.title}
            <ArrowUpRight className="inline-block w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </h3>

          {blog.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {blog.excerpt}
            </p>
          )}

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {blog.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] px-2 py-0 border-primary/40 text-primary/80 group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-all duration-500" />
      </article>
    </Link>
  );
};
