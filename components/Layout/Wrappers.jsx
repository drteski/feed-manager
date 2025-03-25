"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const { isLoading, breadcrumbs } = useBreadcrumbs(pathname);
  console.log(breadcrumbs);
  return (
    <div className="grid grid-rows-[auto_1fr] bg-muted h-[calc(100dvh_-_32px)] gap-4 p-4 rounded-lg">
      <header className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {isLoading ? (
              <Skeleton className="h-[28px] w-80 bg-tertiary" />
            ) : (
              <>
                {breadcrumbs.length === 1 ? (
                  <></>
                ) : (
                  <>
                    {breadcrumbs.map((crumb, index) => {
                      if (index !== breadcrumbs.length - 1) {
                        return (
                          <BreadcrumbItem
                            className="hidden md:block"
                            key={crumb.breadcrumbs}
                          >
                            <BreadcrumbLink href="#">{crumb}</BreadcrumbLink>
                          </BreadcrumbItem>
                        );
                      }
                      return (
                        <BreadcrumbItem className="hidden md:block" key={crumb}>
                          <BreadcrumbPage>{crumb}</BreadcrumbPage>
                        </BreadcrumbItem>
                      );
                    })}
                  </>
                )}
              </>
            )}
            {/*{breadcrumbs.map((crumb) => {*/}
            {/*  return (*/}
            {/*    <BreadcrumbItem className="hidden md:block" key={crumb}>*/}
            {/*      <BreadcrumbLink href="#">{crumb}</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}
            {/*  );*/}
            {/*})}*/}
            {/*<BreadcrumbItem className="hidden md:block">*/}
            {/*  <BreadcrumbLink href="#">*/}
            {/*    Building Your Application*/}
            {/*  </BreadcrumbLink>*/}
            {/*</BreadcrumbItem>*/}
            {/*<BreadcrumbSeparator className="hidden md:block" />*/}
            {/*<BreadcrumbItem>*/}
            {/*  <BreadcrumbPage>Data Fetching</BreadcrumbPage>*/}
            {/*</BreadcrumbItem>*/}
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default Wrapper;
