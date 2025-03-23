"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Sun, Moon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

const SidebarThemeSwitcher = () => {
  const [dark, setDark] = useState(false);
  useLayoutEffect(() => {
    const body = document.querySelector("body");
    console.log(dark);
    dark ? body.classList.add("dark") : body.classList.remove("dark");
  }, [dark]);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex justify-end">
        <SidebarMenu className="w-8">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              onClick={() => setDark(!dark)}
              tooltip={dark ? "Tryb jasny" : "Tryb ciemny"}
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarThemeSwitcher;
