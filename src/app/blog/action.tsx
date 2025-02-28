import prisma from "@lib/prisma";
import { Media, Post, User } from "@prisma/client";

export type FeaturedPost = Post & {
  author: User;
  coverImage: Media | null;
};

export const getFeaturedPosts = async (
  limit: number
): Promise<FeaturedPost[]> => {
  const posts = await prisma.post.findMany({
    take: limit,
    include: {
      author: true,
      coverImage: true,
    },
  });
  return posts;
};

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const postsPerPage = 5;

export const getPosts = async ({
  page,
  category,
}: {
  page: number;
  category?: string;
}) => {
  if (category) {
    const posts = await prisma.post.findMany({
      skip: (page - 1) * postsPerPage,
      take: page * postsPerPage,
      where: {
        categories: {
          some: {
            name: category,
          },
        },
      },
      include: {
        author: true,
      },
    });
    return posts;
  }
  const posts = await prisma.post.findMany({
    skip: (page - 1) * postsPerPage,
    take: page * postsPerPage,
    include: {
      author: true,
    },
  });
  return posts;
};

export const getPostsCount = async (category?: string) => {
  if (category) {
    return prisma.post.count({
      where: {
        categories: {
          some: {
            name: category,
          },
        },
      },
    });
  }
  return prisma.post.count();
};
