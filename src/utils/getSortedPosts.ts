import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(post => {
      // Show all non-draft posts regardless of date
      return !post.data.draft && import.meta.env.DEV || true;
    })
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedPosts;
