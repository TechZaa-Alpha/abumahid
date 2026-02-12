import { Video } from "@/types";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import {
  detectVideoSource,
  getGoogleDrivePreviewUrl,
  getYouTubeEmbedUrl,
} from "./videoEmbed";

export function VideoModal({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const iframeWrapRef = useRef<HTMLDivElement | null>(null);

  const sourceType = useMemo(
    () => detectVideoSource(video.content_link),
    [video.content_link],
  );

  const youtubeEmbed = useMemo(() => {
    if (sourceType !== "youtube") return null;
    return getYouTubeEmbedUrl(video.content_link);
  }, [sourceType, video.content_link]);

  const drivePreview = useMemo(() => {
    if (sourceType !== "gdrive") return null;
    return getGoogleDrivePreviewUrl(video.content_link);
  }, [sourceType, video.content_link]);

  // ESC close + "f" fullscreen toggle
  useEffect(() => {
    const handler = async (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key.toLowerCase() === "f") {
        const target =
          sourceType === "directVideo"
            ? videoRef.current
            : iframeWrapRef.current;

        if (!target) return;

        if (!document.fullscreenElement) {
          await target.requestFullscreen?.();
        } else {
          await document.exitFullscreen?.();
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, sourceType]);

  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-xl overflow-hidden bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="font-semibold line-clamp-1">{video.video_title}</div>

          <div className="flex items-center gap-2">
            <a
              href={video.content_link}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-muted transition"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Player area */}
          {sourceType === "directVideo" && (
            <video
              ref={videoRef}
              src={video.content_link}
              controls
              autoPlay
              className="w-full rounded-lg bg-black max-h-[70vh]"
            />
          )}

          {(sourceType === "youtube" || sourceType === "gdrive") && (
            <div
              ref={iframeWrapRef}
              className="w-full rounded-lg overflow-hidden bg-black"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={
                    sourceType === "youtube"
                      ? (youtubeEmbed ?? "")
                      : (drivePreview ?? "")
                  }
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title={video.video_title}
                />
              </div>
            </div>
          )}

          {sourceType === "other" && (
            <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
              এই link টা embed/play করা যাচ্ছে না।{" "}
              <a
                href={video.content_link}
                target="_blank"
                rel="noreferrer"
                className="underline text-accent"
              >
                Open in new tab
              </a>
            </div>
          )}

          <div className="mt-3 text-xs text-muted-foreground">
            Tip: Press <span className="font-semibold">F</span> for fullscreen,
            <span className="font-semibold"> ESC</span> to close.
          </div>

          {/* Google Drive public warning */}
          {sourceType === "gdrive" && (
            <div className="mt-2 text-xs text-muted-foreground">
              Note: Google Drive video দেখাতে হলে file টা{" "}
              <b>Public/Anyone with link</b> করতে হবে।
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
