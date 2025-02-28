"use server";

import prisma from "@lib/prisma";
import { redirect } from "next/navigation";

export const createCategory = async (formData: FormData) => {
  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    slug: formData.get("slug") as string,
  };

  const res = await prisma.category.create({
    data,
  });

  if (!res) {
    redirect("/error");
  }

  redirect("/cms/categories");
};
