import prisma from "@lib/prisma";

export const getTags = async () => {
  const user = await prisma.tag.findMany();
  return user;
};
