import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xx': '350px',
        'xr': '400px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'app-background': '#000000',
        'color': '#EAEAEA',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 221, 85, 0.1) 0%, rgba(255, 144, 75, 0.4) 74.91%, #223BFE 100%)',
        'border-gradient': 'linear-gradient(90deg, #3246DA 0%, #223BFE 100%)',
        'cust-gradient': 'linear-gradient(90deg, rgba(14, 61, 125, 0.15) 0%, rgba(3, 109, 255, 0.15) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
