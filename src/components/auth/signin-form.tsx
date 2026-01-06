"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeOff, Eye, Github, Facebook } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { useLocaleUrl } from "@/src/hooks/use-locale-url";

export default function SigninForm() {
  const t = useTranslations("Login");
  const tCommon = useTranslations("Common");
  const [showPassword, setShowPassword] = useState(false);
  const { localizeUrl } = useLocaleUrl();

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
          <p className="text-sm text-muted-foreground">{t("welcome_back")}</p>
        </div>

        {/* Card */}
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{t("login")}</CardTitle>
            <CardDescription>{t("enter_email")}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t("password")}</Label>
                <Link
                  href={localizeUrl("/auth/forgot-password")}
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  {t("forgot_password")}
                </Link>
              </div>

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
                  className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            {/* Submit */}
            <Button className="w-full">{t("login")}</Button>

            {/* Divider */}
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs uppercase text-muted-foreground">
                {t("or_continue_with")}
              </span>
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
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-center text-xs text-muted-foreground">
              {t("terms_agreement")}{" "}
              <Link
                href={localizeUrl("/terms")}
                className="underline hover:text-primary"
              >
                {t("terms")}
              </Link>{" "}
              &{" "}
              <Link
                href={localizeUrl("/privacy")}
                className="underline hover:text-primary"
              >
                {t("privacy_policy")}
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
