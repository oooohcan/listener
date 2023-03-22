/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        barLeft: "12rem",
        barTop: "4rem",
        barBottom: "4rem",
      },
      width: {
        wRight: "68rem",
      },
      
    },
  },
  plugins: [],
};
