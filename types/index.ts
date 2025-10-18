export interface PostFrontmatter {
  title: string;
  slug: string;
  date?: string;
  description: string;
  tags?: string[];
  image: string;
}

export interface IProjects {
  title: string;
  description: string;
  src: string;
}
