import keepPreset from "keep-react/preset";
import colors from "tailwindcss/colors";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#800020",
        secondary: "#ffffff",
        chocolate: "#333333",
        hover: colors.neutral[600],
        // hover: "#666666",
        btlinks: "#799c79",
        tcolor: "#333333",
        bgcolor: "#ffffff",
        // bgcolor: "#f5f5f5",
        textLinks: "#0374b5",

        darkMode: {
          DEFAULT: "#2c3e50",
          body: "#2c3e50",
          bars: "#34495e",
          text: colors.white,
          gray: colors.gray[300],
          cardBg: "#2c3e50",
          cardHover: "#34495e",
          cardText: "#ecf0f1",
          cardTextHover: "#ffffff",
          cardButton: "#3498db",
          cardButtonHover: "#2980b9",
          cardButtonT: "#ecf0f1",
          cardButtonTHov: "#ffffff",
        },
        lightmode: {
          cardBg: colors.transparent,
          cardBgHover: "#f1f1f1",
        },
        sidebartext: {
          hover: colors.neutral[400],
        },
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
    },
  },
  presets: [keepPreset],
  plugins: [nextui()],
};
