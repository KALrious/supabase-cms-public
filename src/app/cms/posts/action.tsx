import prisma from "@lib/prisma";

export const getPosts = async () => {
  const user = await prisma.post.findMany({
    include: {
      metadata: true,
    },
  });
  return user;
};
