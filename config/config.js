import { Files, Braces, Settings, LayoutDashboard } from "lucide-react";

const Pages = [
  {
    title: "Dashboard",
    breadcrumbs: ["Dashboard"],
    url: "/",
    isActive: true,
    icon: <LayoutDashboard />,
  },
  {
    title: "Produkty",
    breadcrumbs: ["Produkty"],
    url: "/products",
    icon: <Files />,
  },
  {
    title: "Feedy",
    breadcrumbs: ["Feedy"],
    url: "/feeds",
    icon: <Braces />,
  },
  {
    title: "Ustawienia",
    breadcrumbs: ["Ustawienia"],
    url: "/settings",
    icon: <Settings />,
    items: [
      {
        title: "Kraje",
        breadcrumbs: ["Ustawienia", "Kraje"],
        url: "/settings/countries",
      },
      {
        title: "Feedy",
        breadcrumbs: ["Ustawienia", "Feedy"],
        url: "/settings/feeds",
      },
    ],
  },
];

export default Pages;
