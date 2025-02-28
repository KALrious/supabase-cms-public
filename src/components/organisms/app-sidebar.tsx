"use client";

import * as React from "react";
import { BookOpen, User as Account, Briefcase, Bookmark } from "lucide-react";

import { NavMain } from "@molecules/nav-main";
import { NavUser } from "@molecules/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@molecules/sidebar";
import { User } from "@prisma/client";
import LogoSvg from "@/svg/logo-svg";

const data = {
  navMain: [
    {
      title: "User",
      url: "/cms/users",
      icon: Account,
      isActive: true,
    },
    {
      title: "Post",
      url: "/cms/posts",
      icon: BookOpen,
    },
    {
      title: "Category",
      url: "/cms/categories",
      icon: Briefcase,
    },
    {
      title: "Tag",
      url: "/cms/tags",
      icon: Bookmark,
    },
  ],
};

type SideBarProps = {
  user: Omit<User, "id" | "createdAt" | "updatedAt" | "role">;
};

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & SideBarProps) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LogoSvg size="16" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Supabase CMS</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
