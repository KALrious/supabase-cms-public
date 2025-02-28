import prisma from "@lib/prisma";
import { Category, Media, Post, PostMeta, User } from "@prisma/client";

export type GetPost = Post & {
  metadata: PostMeta | null;
  author: User;
  categories: Category[];
  coverImage: Media | null;
};

export const getPost = async (slug: string) => {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      metadata: true,
      author: true,
      categories: true,
      coverImage: true,
    },
  });
  return post;
};
