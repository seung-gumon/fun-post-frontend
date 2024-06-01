import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { compareDesc, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortPosts = (posts: Post[]) => posts
  .slice()
  .sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)));
