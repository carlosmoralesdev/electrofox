/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

const style = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: []
})

export default style;

/* {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} */

