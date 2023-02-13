/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        "primary": '#21201f',
        "secondary": '#ef6817',
        "secondarydark": '#5f605d',
        "thirddark": '#383838',
      },
    },
  },
  plugins: [],
}
