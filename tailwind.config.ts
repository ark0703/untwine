import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        slideInLeft: "slideInLeft 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        scaleUp: "scaleUp 1s ease-in-out forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4B7E73",
          secondary: "#F2A65A",
          accent: "#F28482",
          neutral: "#26275F",
          "base-100": "#ffffff",
          info: "#76B7B2",
          success: "#88D498",
          warning: "#FFD700",
          error: "#EB0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
