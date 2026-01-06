"use client";

import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { Bell } from "lucide-react";

export function NotificationMenu() {
  const t = useTranslations("Common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {/* Badge */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>{t("notifications")}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>🔔 {t("new_login_detected")}</DropdownMenuItem>
        <DropdownMenuItem>📦 {t("order_completed")}</DropdownMenuItem>
        <DropdownMenuItem>⚙️ {t("settings_updated")}</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-center text-sm text-muted-foreground">
          {t("view_all_notifications")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
