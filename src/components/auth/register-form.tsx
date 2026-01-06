"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Github, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";

export function RegisterForm() {
  const t = useTranslations("Register");
  const tCommon = useTranslations("Common");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <p className="text-sm text-muted-foreground">
            {t("create_your_account")}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          {/* Header */}
          <div className="mb-6 space-y-1 text-left">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("sign_up")}
            </h2>
            <p className="text-sm text-muted-foreground">{t("enter_details")}</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("email_placeholder")}
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password">{t("password")}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("password_placeholder")}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">{t("confirm_password")}</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("password_placeholder")}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </Button>
              </div>
            </div>

            {/* Submit */}
            <Button className="w-full">{t("create_account")}</Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  {t("or_continue_with")}
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                {tCommon("github")}
              </Button>
              <Button variant="outline">
                <Facebook className="mr-2 h-4 w-4" />
                {tCommon("facebook")}
              </Button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          {t("already_have_account")}{" "}
          <Link
            href="/auth/signin"
            className="underline underline-offset-4 hover:text-primary"
          >
            {t("log_in")}
          </Link>
        </p>
      </div>
    </div>
  );
}
