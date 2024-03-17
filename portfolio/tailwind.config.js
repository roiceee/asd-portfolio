/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3.5rem",
        lg: "4rem",
        xl: "6rem",
      },
    },
    extend: {},
  },
  daisyUI: {
    themes: ["all"],
  },
  mode: "jit",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
