/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        "white-brown": "#F0E7DB",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
