"use server";

import prisma from "@lib/prisma";
import { createClient } from "@utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: `${process.env.BASE_URL}/cms`,
    },
  });

  if (error) {
    redirect("/error");
  }

  await prisma.user.create({
    data: {
      email: data.email,
      first_name: "John",
      last_name: "Doe",
    },
  });

  revalidatePath("/", "layout");
  redirect("/confirmation-signup");
}
