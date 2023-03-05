import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// I use a cn helper to make it easier to conditionally add Tailwind CSS classes
// twMerge makes it easy to merge a component styles with styles comming from props
// by taking care of conflicting styles
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
