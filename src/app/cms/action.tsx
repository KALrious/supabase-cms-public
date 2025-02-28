import prisma from "@lib/prisma";

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      role: true,
      email: true,
      first_name: true,
      last_name: true,
      profile_image_url: true,
    },
  });
  return user;
};
