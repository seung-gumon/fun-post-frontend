// contentlayer.config.ts
import { makeSource, defineDocumentType } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    createdAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    isPublished: {
      type: "boolean",
      required: true
    },
    tags: {
      type: "list",
      of: {
        type: "string"
      }
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc.title.replace(/\s+/g, "-").toLowerCase()}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    // @ts-expect-error - codeImport types are not compatible with remark plugins
    remarkPlugins: [codeImport],
    rehypePlugins: [
      [
        // @ts-expect-error - rehype-pretty-code types are not compatible with rehype plugins
        rehypePrettyCode,
        {
          theme: {
            dark: "one-dark-pro",
            light: "github-light"
          },
          defaultLang: {
            block: "typescript"
          }
        }
      ],
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypeCodeTitles
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7QWIC6YS.mjs.map
