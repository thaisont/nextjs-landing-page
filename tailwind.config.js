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
    extend: {
      fontSize: {
        clamp: ["clamp(2rem, 3.2vw + 0.2rem, 3rem)"],
      },
      colors: {
        primary: {
          "dark-blue": "hsl(233, 26%, 24%)",
          "lime-blue": "hsl(136, 65%, 51%)",
          "bright-cyan": "hsl(192, 70%, 51%)",
        },
        secondary: {
          "grey-blue": "hsl(233, 8%, 62%)",
          "light-blue": "hsl(220, 16%, 96%)",
          "light-grey": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
