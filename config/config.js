import { Files, Braces, Settings, LayoutDashboard } from "lucide-react";

const Pages = [
  {
    title: "Dashboard",
    name: "dashboard",
    url: "/",
    isActive: true,
    icon: <LayoutDashboard />,
  },
  {
    title: "Produkty",
    name: "products",
    url: "/products",
    icon: <Files />,
  },
  {
    title: "Feedy",
    name: "feeds",
    url: "/feeds",
    icon: <Braces />,
  },
  {
    title: "Ustawienia",
    name: "settings",
    url: "/settings",
    icon: <Settings />,
    items: [
      {
        title: "Kraje",
        name: "countries",
        url: "/settings/countries",
      },
      {
        title: "Feedy",
        name: "feeds",
        url: "/settings/feeds",
      },
    ],
  },
];

export default Pages;
