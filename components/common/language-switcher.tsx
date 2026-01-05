"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "bn">("en")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <Languages className="h-4 w-4" />
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("en")}>
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("bn")}>
          🇧🇩 বাংলা
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
