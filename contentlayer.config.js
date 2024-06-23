import { makeSource, defineDocumentType } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [codeImport],
    rehypePlugins: [
      [rehypePrettyCode,
        {
          // theme: {
          //   dark: "one-dark-pro",
          //   light: "github-light",
          // },
          // defaultLang: {
          //   block: "typescript",
          // },
        },
      ],
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypeCodeTitles,
    ],
  },
});
