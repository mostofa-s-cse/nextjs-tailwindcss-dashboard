"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/src/components/common/nav-main";
import { NavProjects } from "@/src/components/common/nav-projects";
import { NavUser } from "@/src/components/common/nav-user";
import { TeamSwitcher } from "@/src/components/common/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/src/components/ui/sidebar";
import { useLocaleUrl } from "@/src/hooks/use-locale-url";

// Static data for user and teams
const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("Common");
  const { localizeUrl } = useLocaleUrl();

  // Navigation items with translations
  const navMain = [
    {
      title: t("authentication"),
      url: "#",
      icon: Bot,
      items: [
        {
          title: t("sign_in"),
          url: localizeUrl("/auth/signin"),
        },
        {
          title: t("register"),
          url: localizeUrl("/auth/register"),
        },
        {
          title: t("forgot_password"),
          url: localizeUrl("/auth/forgot-password"),
        },
      ],
    },
    {
      title: t("playground"),
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: t("history"),
          url: "#",
        },
        {
          title: t("starred"),
          url: "#",
        },
        {
          title: t("settings"),
          url: "#",
        },
      ],
    },
    {
      title: t("models"),
      url: "#",
      icon: Bot,
      items: [
        {
          title: t("genesis"),
          url: "#",
        },
        {
          title: t("explorer"),
          url: "#",
        },
        {
          title: t("quantum"),
          url: "#",
        },
      ],
    },
    {
      title: t("documentation"),
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: t("introduction"),
          url: "#",
        },
        {
          title: t("get_started"),
          url: "#",
        },
        {
          title: t("tutorials"),
          url: "#",
        },
        {
          title: t("changelog"),
          url: "#",
        },
      ],
    },
    {
      title: t("settings"),
      url: "#",
      icon: Settings2,
      items: [
        {
          title: t("general"),
          url: "#",
        },
        {
          title: t("team"),
          url: "#",
        },
        {
          title: t("billing"),
          url: "#",
        },
        {
          title: t("limits"),
          url: "#",
        },
      ],
    },
  ];

  const projects = [
    {
      name: t("design_engineering"),
      url: "#",
      icon: Frame,
    },
    {
      name: t("sales_marketing"),
      url: "#",
      icon: PieChart,
    },
    {
      name: t("travel"),
      url: "#",
      icon: Map,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
