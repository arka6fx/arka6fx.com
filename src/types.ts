export interface Project {
  name: string;
  description: string;
  link: string;
  github: string;
  stack: readonly string[];
}

export interface Blog {
  title: string;
  href: string;
  date: string;
}
