import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../../site.config";

export async function GET(context: any) {
  const now = new Date();
  const posts = (
    await getCollection("blog", ({ data }) => !data.draft && data.date.valueOf() <= now.valueOf())
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${siteConfig.name} - The Lab`,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id.replace(/\.md$/, "")}/`,
      categories: post.data.tags,
      author: post.data.author || siteConfig.blog.defaultAuthor,
    })),
    customData: `<language>en-us</language>`,
  });
}
