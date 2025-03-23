"use client";

import { useEffect, useState } from "react";
import { PagesFlatArray } from "@/lib/utils";

const useBreadcrumbs = (pathname) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    if (!pathname) return;
    const pages = PagesFlatArray();
    if (pathname === "/") return setBreadcrumbs(["Dashboard"]);
    const splitedPaths = pathname.split("/").filter((path) => path !== "");
    return setBreadcrumbs(
      ...splitedPaths.map((path) =>
        pages
          .filter((page) => page.url.includes(path))
          .map((page) => page.title),
      ),
    );
  }, [pathname]);
  return breadcrumbs;
};

export default useBreadcrumbs;
