interface BlogPost {
  slug: string,
  title: string,
  date: Date,
  excerpt: string,
  categories: string[],
}

interface Project {
  title: string,
  description: string,
  url?: string,
  image_src?: string,
  categories: string[],
  slug: string,
  github_url?: string,
}