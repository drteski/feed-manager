"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/components/Breadcrumbs";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="grid grid-rows-[auto_1fr] bg-muted h-[calc(100dvh_-_32px)] gap-4 p-4 rounded-lg">
      <header className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs pathname={pathname} />
      </header>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default Wrapper;
