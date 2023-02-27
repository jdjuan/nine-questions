const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-roboto)", ...fontFamily.mono],
        ui: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      slate: colors.slate,
      green: { 200: "#fffffe", 400: "#abd1c6", 700: "#004643", 900: "#001e1d" },
      yellow: "#f9bc60",
      red: "#e16162",
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
