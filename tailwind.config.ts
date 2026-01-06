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
        purple: {
          950: "#1a0b2e",
          900: "#2a0b5e",
          800: "#3a1070",
          700: "#4a1b8c",
          600: "#5a2ca0",
          500: "#7c3aed",
          400: "#8b5cf6",
          300: "#a78bfa",
          200: "#c4b5fd",
          100: "#ddd6fe",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(135deg, #1a0b2e 0%, #3a1070 50%, #7c3aed 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
