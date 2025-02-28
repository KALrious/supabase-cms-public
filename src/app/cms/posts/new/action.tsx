"use server";

import prisma from "@lib/prisma";
import { redirect } from "next/navigation";
import { createClient } from "@utils/supabase/server";

export const createTag = async (formData: FormData) => {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: userData?.user?.email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") ? (formData.get("excerpt") as string) : "",
    content: formData.get("markdown-editor") as string,
    metadata: {
      create: {
        metaTitle: formData.get("metaTitle") as string,
        metaDesc: formData.get("metaDescription") as string,
      },
    },
    author: {
      connect: {
        id: user.id,
      },
    },
  };

  const file = formData.get("file-upload") as File;

  console.log(file, data);

  if (file.size > 0) {
    const { data: dataBucket, error } = await supabase.storage
      .from("supabase-cms")
      .upload(`blog/${file.name}`, file, {
        upsert: true,
      });

    if (error) {
      redirect("/error");
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data.coverImage = {
      create: {
        fileName: file.name,
        fileUrl: `https://kkuljccmudnqugcotgat.supabase.co/storage/v1/object/public/supabase-cms/${dataBucket?.path}`,
        fileType: file.type,
        fileSize: file.size,
        alt: formData.get("title") as string,
        ownerId: user.id,
      },
    };
  }

  const res = await prisma.post.create({
    data,
  });

  console.log("rest", res);

  if (!res) {
    redirect("/error");
  }

  redirect("/cms/posts");
};
