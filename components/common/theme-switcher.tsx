"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const cycleTheme = () => {
    if (theme === "system") setTheme("light")
    else if (theme === "light") setTheme("dark")
    else setTheme("system")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="scale-95 rounded-full hover:bg-accent hover:text-accent-foreground"
      onClick={cycleTheme}
      aria-label="Toggle theme"
    >
      <Laptop className={`absolute size-[1.2rem] transition-all ${theme === "system" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
      <Sun className={`absolute size-[1.2rem] transition-all ${theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
      <Moon className={`absolute size-[1.2rem] transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
