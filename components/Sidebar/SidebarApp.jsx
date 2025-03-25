"use client";
import { Fragment } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Pages from "@/config/config";
import SidebarCollapsibleItem from "@/components/Sidebar/SidebarCollapsibleItem";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarThemeSwitcher from "@/components/Sidebar/SidebarThemeSwitcher";
import SidebarLogo from "@/components/Sidebar/SidebarLogo";

const SidebarApp = () => {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarLogo />
      <SidebarContent className="justify-between">
        <SidebarGroup>
          <SidebarMenu>
            {Pages.map((item) => (
              <Fragment key={item.title}>
                {item.items === undefined ? (
                  <SidebarItem {...item} key={item.title} />
                ) : (
                  <SidebarCollapsibleItem {...item} key={item.title} />
                )}
              </Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarThemeSwitcher />
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarApp;
