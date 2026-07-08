/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#685DC5',
          700: '#5a4fb3',
        }
      }
    },
  },
  plugins: [],
}
