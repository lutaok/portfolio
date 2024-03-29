import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a5ff00",
          50: "#f6ffe5",
          100: "#edffcc",
          200: "#dbff99",
          300: "#c9ff66",
          400: "#b8ff33",
          500: "#a6ff00",
          600: "#85cc00",
          700: "#639900",
          800: "#426600",
          900: "#213300",
          950: "#111a00",
        },
        secondary: {
          DEFAULT: "#153491",
          50: "#e9edfc",
          100: "#d2dcf9",
          200: "#a6b9f2",
          300: "#7996ec",
          400: "#4c73e6",
          500: "#2050df",
          600: "#1940b3",
          700: "#133086",
          800: "#0d2059",
          900: "#06102d",
          950: "#030816",
        },
        accent: {
          DEFAULT: "#3a2de0",
          50: "#eae9fc",
          100: "#d5d3f8",
          200: "#aba6f2",
          300: "#817aeb",
          400: "#584ee4",
          500: "#2e21de",
          600: "#251bb1",
          700: "#1b1485",
          800: "#120d59",
          900: "#09072c",
          950: "#050316",
        },
        bgColor: {
          DEFAULT: "#020f0b",
          50: "#e9fcf6",
          100: "#d2f9ed",
          200: "#a5f3dc",
          300: "#78edca",
          400: "#4be7b8",
          500: "#1fe0a6",
          600: "#18b485",
          700: "#128764",
          800: "#0c5a43",
          900: "#062d21",
          950: "#031611",
        },
        words: {
          DEFAULT: "#e6f9f3",
          50: "#eafaf5",
          100: "#d6f5eb",
          200: "#adebd7",
          300: "#84e1c4",
          400: "#5bd7b0",
          500: "#32cd9c",
          600: "#28a47d",
          700: "#1e7b5e",
          800: "#14523e",
          900: "#0a291f",
          950: "#051510",
        },
      },
    },
  },
  plugins: [],
};

export default config;
