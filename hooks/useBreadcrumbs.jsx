"use client";

import { useEffect, useState } from "react";
import { PagesFlatArray } from "@/lib/utils";

const useBreadcrumbs = (pathname) => {
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!pathname) return;
    const pages = PagesFlatArray();
    setBreadcrumbs(...pages.filter((page) => page.url === pathname));
    setIsLoading(false);
  }, [pathname]);
  return {
    isLoading,
    breadcrumbs,
  };
};

export default useBreadcrumbs;
