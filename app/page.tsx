import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';

export default function Home() {
  console.log('allPosts', allPosts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </main>
  );
}
