"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const SidebarItem = ({ title, url, icon }) => {
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild tooltip={title}>
        <a href={url}>
          {icon}
          <span>{title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SidebarItem;
