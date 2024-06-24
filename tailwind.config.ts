import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'waves-pattern-black': "url('/bg/stacked-waves-haikei-black.svg')",
        'waves-pattern-white': "url('/bg/stacked-waves-haikei-white.svg')",
        'dark-gradient': 'linear-gradient(135deg, #8B008B, #4B0082, #00008B)',
      },
      colors: {
        "mac-purple": "#322741",
        'white-trans': "rgb(255,255,255,0.2)",
        'black-trans': 'rgb(0,0,0,0.2)',
        'dark-pink': '#8B008B',    // DarkMagenta
        'dark-purple': '#4B0082',  // Indigo
        'dark-blue': '#00008B',    // DarkBlue
        'header-back': 'rgb(0,0,0,0.8)',
      },
      transitionProperty: {
        'height': 'height',
        'filter': 'filter'
      },
      animation: {
        'spin-slow': 'spin 700s linear infinite',
        'spin-medium': 'spin 30s linear infinite',
        'appear-from-below': 'appearFromBelow 2s ease-out',
      },
      keyframes: {
        appearFromBelow: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
