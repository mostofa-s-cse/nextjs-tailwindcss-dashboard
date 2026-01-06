"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useTranslation } from "next-i18next"

import { ThemeSwitcher } from "@/components/common/theme-switcher"
import { UserProfileMenu } from "@/components/common/user-profile-menu"
import { NotificationMenu } from "@/components/common/notification-menu"
import { LanguageSwitcher } from "@/components/common/language-switcher"

export function AppHeader() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />

      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />

      <Input
        placeholder={t("header.searchPlaceholder")}
        className="w-48 md:w-72"
      />

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
  )
}
