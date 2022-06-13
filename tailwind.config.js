/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        primarybg: '#FFF8F2',
        primary: '#F8964F',
        primarydark: '#562E08',
      }
    },
  },
  plugins: [],
}
