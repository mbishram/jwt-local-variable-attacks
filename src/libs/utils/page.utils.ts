import {
  TAILWIND_BREAKPOINTS,
  TailwindBreakpointsKey,
} from "@/constants/ui.contants";

export function getPageTitle(pageName?: string) {
  return (
    (pageName ? `${pageName} - ` : "") + process.env.NEXT_PUBLIC_APP_NAME || ""
  );
}

export function getTailwindBreakpointsArray() {
  return Object.keys(TAILWIND_BREAKPOINTS).map(
    (key) => TAILWIND_BREAKPOINTS[<TailwindBreakpointsKey>key]
  );
}
