import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function isDarkMode() {
//   const theme = window.localStorage.getItem("theme");
//   if (!theme) {
//     return true;
//   }
//   return theme === "dark";
// }
