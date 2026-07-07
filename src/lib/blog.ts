import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
});

export interface MDXFileData {
  metadata: z.infer<typeof metadataSchema>;
  slug: string;
  content: string;
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    throw new Error("File is missing frontmatter");
  }

  const frontmatterBlock = match[1];
  const content = match[2];

  const metadataLines = frontmatterBlock.split("\n");
  const metadata: Record<string, string> = {};

  for (const line of metadataLines) {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      metadata[key.trim()] = valueParts.join(":").trim();
    }
  }

  return { metadata: metadataSchema.parse(metadata), content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return { metadata, slug, content };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "posts"));
}

export function getPublishedPosts() {
  return getPosts();
}

export function getPostBySlug(slug: string) {
  const posts = getPublishedPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
