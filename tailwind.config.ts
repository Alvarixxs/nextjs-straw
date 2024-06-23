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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'waves-pattern': "url('/bg/stacked-waves-haikei.svg')",
        'blurry-gradient': "url('/bg/blurry-gradient-haikei.svg')",
      },
      colors: {
        "mac-purple": "#322741",
        'white-trans': "rgb(255,255,255,0.2)",
      }
    },
  },
  plugins: [],
};
export default config;
