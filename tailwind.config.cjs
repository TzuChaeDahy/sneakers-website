/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        project: {
          orange: {
            100: "hsl(25, 100%, 94%)",
            200: "hsl(26, 100%, 55%)",
          },
          black: {
            100: "hsl(220, 14%, 75%)",
            200: "hsl(219, 9%, 45%)",
            300: "hsl(220, 13%, 13%)",
            400: "hsl(0, 0%, 0%)",
          },
          white: {
            100: "hsl(0, 0%, 100%)",
            200: "hsl(223, 64%, 98%)",
          },
        },
      },
      fontFamily: {
        kumbh: ["'Kumbh Sans'", "sans-serif"],
      },
      screens: {
        sm: "650px",
      },
    },
  },
  plugins: [],
};
