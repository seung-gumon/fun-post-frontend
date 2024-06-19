import { allDocuments } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocuments.find((docParam) => docParam.url === `/post/${slug}`);

  if (!doc) notFound();

  return doc;
}

const page: FC<PageProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);

  return (
    <div>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default page;
