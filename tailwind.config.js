/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./moduls/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#243C7C",
      indigo1: "#F3FAFF",
      indigo2: "#2A5C7B",
      neutral: "#595959",
      // warning1: "#F8B600",
      warning1: "#326AB3",
      warning2: "#34B889",
      warning3: "#FFFFFF",
      warning4: "#34B889",
      warning5: "#326AB3",
      warning6: "#DBE474",
    },
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: 0, position: "relative", bottom: -30 },
          "100%": { opacity: 1, position: "relative", bottom: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fadeOut 0.9s ease-in-out",
        fade1: "fadeOut 1.1s ease-in-out",
        fadein: "fadeIn 0.7s ease-in-out",
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
