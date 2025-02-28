import { createClient } from "@utils/supabase/server";
import { redirect } from "next/navigation";
import { getUser } from "./action";
import { Role } from "@prisma/client";
import { SidebarInset, SidebarProvider } from "@molecules/sidebar";
import { SiteHeader } from "@atoms/sidebar-header";
import { AppSidebar } from "@organisms/app-sidebar";

export default async function CmsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user || !data.user.email) {
    redirect("/login");
  }
  const user = await getUser(data.user.email);
  if (user?.role !== Role.ADMIN) {
    redirect("/login");
  }
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar user={user} />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
