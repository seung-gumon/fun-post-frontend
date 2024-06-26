import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Image src="/greymon.jpeg" alt="Next.js Logo" width={200} height={200} />
    </main>
  );
}
