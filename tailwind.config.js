/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#251D3A',
        'bg-secondary': '#2A2550',
        'text-primary': '#FF7700',
        'text-secondary': '#E04D01'
      }
    },
  },
  plugins: [],
}