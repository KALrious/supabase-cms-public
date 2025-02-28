"use server";

import prisma from "@lib/prisma";
import { createClient } from "@utils/supabase/server";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  const supabase = await createClient();
  const file = formData.get("file-upload") as File;

  const { data: dataBucket, error } = await supabase.storage
    .from("supabase-cms")
    .upload(`user/${file.name}`, file, {
      upsert: true,
    });

  if (error) {
    redirect("/error");
  }

  const data = {
    first_name: formData.get("firstName") as string,
    last_name: formData.get("lastName") as string,
    email: formData.get("email") as string,
    profile_image_url: `https://kkuljccmudnqugcotgat.supabase.co/storage/v1/object/public/supabase-cms/${dataBucket?.path}`,
  };

  const res = await prisma.user.create({
    data,
  });

  if (!res) {
    redirect("/error");
  }

  redirect("/cms/users");
};
