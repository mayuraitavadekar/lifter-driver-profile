/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsm': {max: '480px'},
      
      'sm': {max: '640px'},

      'md': {max: '768px'},

      'lg': {max: '1080px'},
    },
  },
  plugins: [],
}
