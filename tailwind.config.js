/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#FDFDFD",
        "lighter-white": "#F8F8F8",
        "medium-blue": "#1C6DE4",
      },
    },
  },
  plugins: [],
};
