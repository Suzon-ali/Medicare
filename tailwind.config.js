/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        dark_bg: '#0b1122',
        dark_button: '#0584c7',
        button_bg: '#1f2937',

      }
    },
  },
  plugins: [],
}

