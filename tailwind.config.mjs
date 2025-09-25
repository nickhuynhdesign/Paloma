/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#e7d393",
        "white-100": "#efefef",
      },
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
        "modern-negra": ["Modern Negra", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
