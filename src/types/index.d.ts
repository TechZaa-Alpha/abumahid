export interface Project {
  _id: string;
  name: string;
  description: string | null;
  tech_stack: string[] | null;
  tags: string[] | null;
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  figma_url: string | null;
  is_featured: boolean | null;
}

export interface Blog {
  _id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  tags: string[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  _id: string;
  video_title: string;
  short_description: string | null;
  content_link: string;
  thumbnail_url: string | null;
  createdAt: string;
  updatedAt: string;
}
