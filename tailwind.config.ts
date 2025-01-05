import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE724C',
        secondary: '#9EA1B1',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '1232px'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
