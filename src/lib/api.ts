import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

export type Post = {
  title: string;
  slug: string;
  language: string;
  author: string;
  date: string;
  coverImage: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  content: string;
};

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  let post: Post;

  post.title = data.title;
  post.slug = realSlug;
  post.language = data.language;
  post.author = data.author;
  post.date = data.date;
  post.coverImage = data.coverImage;
  post.excerpt = data.xcerpt;
  post.categories = data.categories;
  post.tags = data.tags;
  post.content = content;

  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
