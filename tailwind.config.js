const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /h-(44|52|64|80|96)/,
    },
  ],
  theme: {
    // When changing screens, update "./src/constants/ui.constants" TAILWIND_BREAKPOINTS too.
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: colors.blue["400"],
      },
      minHeight: {
        "44px": "44px",
      },
    },
  },
  plugins: [],
};
