import prisma from "@lib/prisma";

export const getUsers = async () => {
  const user = await prisma.user.findMany({
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
