/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

