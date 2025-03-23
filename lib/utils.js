import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Pages from "@/config/config";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const flatten = (array, initial = []) => {
  return array.reduce((acc, curr) => {
    if (curr.items !== undefined) {
      acc = flatten(curr.items, [
        {
          url: curr.url,
          title: curr.title,
        },
        ...acc,
      ]);
    } else {
      acc.push({
        url: curr.url,
        title: curr.title,
      });
    }
    return acc;
  }, initial);
};

export const PagesFlatArray = () => {
  return flatten(Pages);
};
