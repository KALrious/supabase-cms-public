"use server";

import prisma from "@lib/prisma";
import { redirect } from "next/navigation";

export const createTag = async (formData: FormData) => {
  const data = {
    name: formData.get("name") as string,
    slug: formData.get("slug") as string,
  };

  const res = await prisma.tag.create({
    data,
  });

  if (!res) {
    redirect("/error");
  }

  redirect("/cms/tags");
};
