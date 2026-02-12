export type VideoSourceType = "youtube" | "gdrive" | "directVideo" | "other";

export function detectVideoSource(url: string): VideoSourceType {
  const u = url.toLowerCase();

  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  if (u.includes("drive.google.com")) return "gdrive";

  // direct video file extensions (Cloudinary/S3/CDN direct mp4/webm/etc)
  if (u.match(/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i)) return "directVideo";

  if (u.includes("res.cloudinary.com") && u.includes("/video/"))
    return "directVideo";

  return "other";
}

export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      // youtube.com/embed/<id>
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex >= 0 && parts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function getGoogleDrivePreviewUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // /file/d/<id>/...
    const parts = u.pathname.split("/").filter(Boolean);
    const dIndex = parts.indexOf("d");
    if (parts.includes("file") && dIndex >= 0 && parts[dIndex + 1]) {
      const id = parts[dIndex + 1];
      return `https://drive.google.com/file/d/${id}/preview`;
    }

    // open?id=<id>
    const id = u.searchParams.get("id");
    if (id) return `https://drive.google.com/file/d/${id}/preview`;

    return null;
  } catch {
    return null;
  }
}
