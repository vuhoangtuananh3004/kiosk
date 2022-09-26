/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      'xs': '390px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Sacramento: ["Sacramento", "cursive"],
      },
      screens: {
        'sm': '290px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      }
      ,
      height: {
        '2xl': "600px",
      },
      width: {
        'test': '768px',
      },
    },
  },
  plugins: [],
}