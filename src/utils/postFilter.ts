import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // Show all non-draft posts
  return !data.draft;
};

export default postFilter;
