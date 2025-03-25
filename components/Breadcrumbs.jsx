"use client";

import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { Fragment } from "react";

const Breadcrumbs = ({ pathname }) => {
  const { isLoading, breadcrumbs } = useBreadcrumbs(pathname);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {isLoading ? (
          <Skeleton className="h-[28px] w-[calc(100dvw_-_118px)] md:w-80 bg-tertiary" />
        ) : (
          <>
            {breadcrumbs.crumbs.length === 1 ? (
              <BreadcrumbItem key={breadcrumbs.crumbs}>
                <BreadcrumbPage>{breadcrumbs.crumbs}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <>
                {breadcrumbs.crumbs.map((crumb, index) => {
                  const splitUrl = breadcrumbs.url
                    .split("/")
                    .filter((item) => item !== "");
                  if (index !== breadcrumbs.crumbs.length - 1) {
                    return (
                      <Fragment key={index}>
                        <BreadcrumbItem>
                          <BreadcrumbLink href={`/${splitUrl[index]}`}>
                            {crumb}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                      </Fragment>
                    );
                  }
                  return (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbPage>{crumb}</BreadcrumbPage>
                    </BreadcrumbItem>
                  );
                })}
              </>
            )}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
