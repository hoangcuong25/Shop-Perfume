/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2894f1',
      }
    },
  },
  plugins: [],
}

