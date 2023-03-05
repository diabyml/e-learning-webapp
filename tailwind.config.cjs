/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "hsl(181, 47%, 63%)",
          300: "hsl(181, 47%, 57%)",
          400: "hsl(181, 47%, 51%)",
          500: "hsl(181, 47%, 45%)",
          600: "hsl(181, 47%, 39%)",
        },
        secondary: {
          40: "#717FB0",
          100: "#2F327D",
        },
        accent: {
          400: "hsl(223, 74%, 54%)",
          600: "hsl(223, 74%, 42%)",
        },
        destructive: {
          400: "hsl(342, 62%, 60%)",
          600: "hsl(342, 62%, 48%)",
        },
        text: "#696984",
        text1:"#5B5B5B",
        mainBg: "#252641",
        tiffanyBlue: "#00CBB8",
        greenBlue: "#136CB5",
        spiroDiscoBall: "#23BDEE",
        eucalyptus: "#33EFA0",

        gray1: "#5B5B5B",
      },

      // missing fonts
      // Buenos Aires Trial
      fontFamily: {
        poppin: "'Poppins', sans-serif",
        nunito: "'Nunito Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },

      // animations stuff
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // @ts-ignore
  plugins: [require("tailwindcss-animate")],
};
