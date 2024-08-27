/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      screens: {
        xs: "384px", // Custom extra small breakpoint for mobile devices
        sm: "640px", // Default small breakpoint
        md: "768px", // Default medium breakpoint
        lg: "1024px", // Default large breakpoint
        xl: "1280px", // Default extra-large breakpoint
        "2xl": "1536px", // Default 2x large breakpoint
        "3xl": "1920px", // Custom extra-large breakpoint for very large screens
      },
      fontFamily: {
        robo: ["Roboto"],
      },

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};
