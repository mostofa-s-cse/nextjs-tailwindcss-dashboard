"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export function ForgotPasswordForm() {
  const t = useTranslations("ForgotPassword");

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/shadcnblocks-admin-logo.svg"
              alt="Shadcnblocks"
              width={28}
              height={28}
            />
            <h1 className="text-lg font-semibold">Shadcnblocks – Admin Kit</h1>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          {/* Header */}
          <div className="mb-6 space-y-1 text-left">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("forgot_password")}
            </h2>
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("email_placeholder")}
              />
            </div>

            {/* Submit */}
            <Button className="w-full">{t("continue")}</Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          {t("no_account")}{" "}
          <Link
            href="/auth/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            {t("register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
