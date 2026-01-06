"use client";

import { SidebarTrigger } from "@/src/components/ui/sidebar";
import { Separator } from "@/src/components/ui/separator";
import { Input } from "@/src/components/ui/input";
import { useTranslations } from "next-intl";

import { ThemeSwitcher } from "@/src/components/common/theme-switcher";
import { UserProfileMenu } from "@/src/components/common/user-profile-menu";
import { NotificationMenu } from "@/src/components/common/notification-menu";
import { LanguageSwitcher } from "@/src/components/common/language-switcher";

export function AppHeader() {
  const t = useTranslations("Common");

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />

      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />

      <Input placeholder={t("search_placeholder")} className="w-48 md:w-72" />

      <div className="flex flex-1 items-center justify-end gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <NotificationMenu />

        <UserProfileMenu
          name="Mostofa Shahid"
          email="mostofa@example.com"
          image="https://avatars.githubusercontent.com/u/1?v=4"
        />
      </div>
    </header>
  );
}
