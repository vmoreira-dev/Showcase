import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or "class" if you want manual dark-mode toggling
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
