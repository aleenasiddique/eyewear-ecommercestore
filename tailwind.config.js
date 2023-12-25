/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#e8cebf',
        'light-pink': '#fdfaf9',
        'green': '#266150',
        'dark-green': '#053f43',
      }
    },
  },
  plugins: [],
}

