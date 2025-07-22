/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          card: '#1a1a1a',
          text: '#ffffff',
          'text-secondary': '#a0aec0',
        }
      }
    },
  },
  plugins: [],
} 