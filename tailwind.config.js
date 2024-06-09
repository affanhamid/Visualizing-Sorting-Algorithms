/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        barColor: "#4e79a7",
        buttonColor: "#f28e2b",
        headerColor: "#2c4e73",
        buttonDisabled: "#eeeeee",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
