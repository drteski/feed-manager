import { Files, Braces, Settings, LayoutDashboard } from "lucide-react";

const Pages = [
  {
    title: "Dashboard",
    crumbs: ["Dashboard"],
    url: "/",
    isActive: true,
    icon: <LayoutDashboard />,
  },
  {
    title: "Produkty",
    crumbs: ["Produkty"],
    url: "/products",
    icon: <Files />,
  },
  {
    title: "Feedy",
    crumbs: ["Feedy"],
    url: "/feeds",
    icon: <Braces />,
  },
  {
    title: "Ustawienia",
    crumbs: ["Ustawienia"],
    url: "/settings",
    icon: <Settings />,
    items: [
      {
        title: "Kraje",
        crumbs: ["Ustawienia", "Kraje"],
        url: "/settings/countries",
      },
      {
        title: "Feedy",
        crumbs: ["Ustawienia", "Feedy"],
        url: "/settings/feeds",
        items: [
          {
            title: "Feedys",
            crumbs: ["Ustawienia", "Feedy", "dup"],
            url: "/settings/feeds/dup",
          },
        ],
      },
    ],
  },
];

export default Pages;
