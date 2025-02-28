import prisma from "@lib/prisma";

export const getCategories = async () => {
  const user = await prisma.category.findMany();
  return user;
};
