"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
