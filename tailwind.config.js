/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom-height': '15vh 55vh auto'
      },
    },
    plugins: [],
  }
}
