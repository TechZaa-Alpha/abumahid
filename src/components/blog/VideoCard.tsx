import { ExternalLink, Play } from 'lucide-react';

interface Video {
  id: string;
  video_title: string;
  short_description: string | null;
  content_link: string;
  thumbnail_url: string | null;
  created_at: string;
}

export const VideoCard = ({ video }: { video: Video }) => {
  const formattedDate = new Date(video.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <a href={video.content_link} target="_blank" rel="noopener noreferrer">
      <article className="group relative overflow-hidden rounded-lg border-2 border-border bg-card transition-all duration-500 hover:border-accent hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--accent)/0.35),0_20px_40px_-15px_hsl(var(--accent)/0.2)]">
        {/* Animated gradient top bar */}
        <div className="h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Thumbnail / Play button hero area */}
        <div className="relative h-44 bg-gradient-to-br from-accent/5 via-card to-accent/10 flex items-center justify-center overflow-hidden">
          {/* Thumbnail image */}
          {video.thumbnail_url ? (
            <img
              src={video.thumbnail_url}
              alt={video.video_title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <>
              {/* Animated circles fallback */}
              <div className="absolute w-32 h-32 rounded-full border border-accent/20 group-hover:scale-[2] group-hover:border-accent/10 transition-all duration-1000 ease-out" />
              <div className="absolute w-20 h-20 rounded-full border border-accent/30 group-hover:scale-[2.5] group-hover:border-accent/5 transition-all duration-700 ease-out" />
            </>
          )}

          {/* Dark overlay for thumbnail */}
          {video.thumbnail_url && (
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500" />
          )}

          {/* Play icon */}
          <div className="relative z-10 w-16 h-16 rounded-full border-2 border-accent/60 flex items-center justify-center bg-accent/10 backdrop-blur-sm group-hover:bg-accent/20 group-hover:border-accent group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-all duration-500 group-hover:scale-110">
            <Play className="w-7 h-7 text-accent ml-0.5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          </div>

          {/* Corner scanlines effect */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
        </div>

        <div className="p-5 space-y-3">
          {/* Date + external link */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formattedDate}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-accent transition-all duration-300" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {video.video_title}
          </h3>

          {/* Description */}
          {video.short_description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{video.short_description}</p>
          )}
        </div>

        {/* Sweep highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </article>
    </a>
  );
};
