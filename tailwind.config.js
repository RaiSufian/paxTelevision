/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'themeColor': '#4F7098',
      'themeDark': "#0f0f0f33",
      'white': "#ffffff",
      'darkText': '#0F0F0F',
      'black':"#000",
      'darkBlue':'#0E1635',
      'gray':'#5F5F5F',
      'skin':'#fff1aab0',
      'orange':"#FF5900",
      'light_gray':"#a8a8a8"

    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
