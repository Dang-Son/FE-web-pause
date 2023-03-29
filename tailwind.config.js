/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Nunito"'],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
