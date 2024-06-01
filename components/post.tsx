import { type Post } from 'contentlayer/generated';
import { sortPosts } from '@/lib/utils';

interface PostProps {
  posts : Post[]
}

export default function PostMDX({ posts } : PostProps) {
  const sortedPosts = sortPosts(posts);
  const post = sortedPosts[0];

  return (
    <article />
  );
}
