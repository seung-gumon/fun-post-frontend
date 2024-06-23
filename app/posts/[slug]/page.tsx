import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

// export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post._raw.flattenedPath === slug);
//   if (!post) notFound();
//
//   return {
//     title: post.title,
//     openGraph: {
//       title: post.title,
//       type: "article",
//       publishedTime: post.createdAt,
//       authors: ["name"],
//     },
//   };
// }

async function getDocFromParams(slug : string) {
  const post = allPosts.find((postParam) => postParam.slugAsParams === slug);
  if (!post) notFound();
  return post;
}

async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocFromParams(params.slug);

  return (
    <article className="prose mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <Mdx code={doc.body.code} />
      </div>
    </article>
  );
}

export default Page;
