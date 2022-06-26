// When changing breakpoints, update "tailwind.config.js" screens too.
export const TAILWIND_BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export type TailwindBreakpointsKey = keyof typeof TAILWIND_BREAKPOINTS;
