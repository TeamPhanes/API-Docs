import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlue: '#2227F7',
        mainBlueHover: '#060AAC',
      },
      width: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      keyframes: {
        modalIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        modalIn: "modalIn 300ms ease-out forwards",
        modalOut: "modalOut 200ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
