export type TailwindBreakpointsKey = keyof typeof TAILWIND_BREAKPOINTS;

// When changing breakpoints, update "tailwind.config.js" screens too.
export const TAILWIND_BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

// Update "tailwind.config.js" safelist too.
export const IMAGE_HEIGHTS = ["h-44", "h-52", "h-64", "h-80", "h-96"];
